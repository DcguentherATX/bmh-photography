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
            currentOrderQuantity: 2
        }

        // bind functions here
    }

    componentDidMount() {
        console.log('mounted');
        Axios.get('/pics')
            .then((response) => {
                // console.log('response', response.data);
                this.setState({
                    images: response.data
                })
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    render() {
        let currentTotal = this.state.currentOrderPrice * this.state.currentOrderQuantity;

        return (
            <div>
                <NavBar />
                <About />
                <MainDisplay pictures={this.state.images} currentTotal={currentTotal} />
                <Footer />
            </div>
        )
    }
}

export default App;