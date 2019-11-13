import React from 'react';
import NavBar from '../components/Navigation';
import SearchBar from '../components/SearchBar';
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
            currentOrderQuantity: 0,
            cart: [],
            cartTotal: 0,
            searchWord: '',
            itemTotal: 0
        }

        // bind functions here

        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }

    //  handles specified categories

    handleDropdownClick(e) {
        // console.log('event', e.target.getAttribute('value'));
        let searchTerm = e.target.getAttribute('value');
        if (searchTerm === 'all') {
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
        } else {
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
    }

    // functions that update modal values

    updateQuantity(e) {
    //    console.log('quantity', e.target.value)
       e.preventDefault();
       let quantity = Number(e.target.value);
            let newTotal = Number((quantity * this.state.currentOrderPrice).toFixed(2));

            this.setState({
                currentOrderQuantity: quantity,
                itemTotal: newTotal
            })
    }

    updatePrice(e){
        // console.log('new price', e.target.value);
        let price = Number(e.target.value);
        let newTotal = Number((this.state.currentOrderQuantity * price).toFixed(2));

        this.setState({
            currentOrderPrice: price,
            itemTotal: newTotal
        })
    }

    // updates shopping cart

    handleAddToCartClick(picture) {
        picture.quantity = this.state.currentOrderQuantity;
        picture.price = this.state.currentOrderPrice;
        picture.cost = Number((picture.quantity * picture.price).toFixed(2));
        let total = 0;
        console.log('add to cart clicked', picture);
        let currentCart = this.state.cart.slice(0);
        currentCart.push(picture);

        if (picture.quantity > 0 && picture.quantity <= 10) {
        for (let i = 0; i < currentCart.length; i++) {
            total += currentCart[i].cost
        }
        console.log('total', total)

        this.setState({
            cart: currentCart,
            cartTotal: total
        })
    } else {
        console.log('out of range')
    }
    }

    handleChange(e) {
        e.preventDefault();

       this.setState({
           searchWord: e.target.value
       })
    }

    submitHandler(e) {
        e.preventDefault();
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state.searchWord)

        Axios.get(`/keyword?term=${this.state.searchWord}`)
          .then((response) => {
            //   console.log('getting searchbar response', response)
              this.setState({
                  images: response.data
              })
          })
          .catch((error) => {
             console.log('search error', error);
          })
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
                <NavBar handleDropdownClick={(e) => this.handleDropdownClick(e)} cartItems={this.state.cart} cartTotal={this.state.cartTotal} />
                <About />
                <SearchBar submitHandler={this.submitHandler} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <MainDisplay pictures={this.state.images} currentTotal={currentTotal} handleAddToCartClick={this.handleAddToCartClick} updateQuantity={this.updateQuantity} itemTotal={this.state.itemTotal} updatePrice={this.updatePrice}/>
                <Footer />
            </div>
        )
    }
}

export default App;