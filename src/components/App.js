import React from 'react';
import NavBar from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import MainDisplay from '../components/MainDisplay';
import Axios from 'axios';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [],
            currentOrderPrice: 59.99,
            currentOrderQuantity: 2,
            cart: []
        }

        // bind functions here

        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
    }

    handleDropdownClick(e) {
        // console.log('event', e.target.getAttribute('value'));
        let searchTerm = e.target.getAttribute('value');
        Axios.get(`/search?term=${searchTerm}`)
            .then((response) => {
                // console.log('term response', response.data);
                this.setState({
                    images: response.data
                })
            })
            .catch((error) => {
                console.log('search term error', error);
            })
    }

    handleAddToCartClick() {
        console.log('add to cart clicked')
    }

    componentDidMount() {
        // console.log('mounted');
        Axios.get('/pics')
            .then((response) => {
                // console.log('response', response.data);
                this.setState({
                    images: response.data
                })
            })
            .catch((error) => {
                console.log('mounting error', error);
            });
    }

    render() {
        let currentTotal = this.state.currentOrderPrice * this.state.currentOrderQuantity;

        return (
            <div>
                <NavBar handleDropdownClick={(e) => this.handleDropdownClick(e)} />
                <About />
                <MainDisplay pictures={this.state.images} currentTotal={currentTotal} handleAddToCartClick={this.handleAddToCartClick} />
                <Footer />
            </div>
        )
    }
}

export default App;