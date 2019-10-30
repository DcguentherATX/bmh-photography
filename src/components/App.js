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
            images: []
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
        return (
            <div>
                <NavBar />
                <About />
                <MainDisplay pictures={this.state.images} />
                <Footer />
            </div>
        )
    }
}

export default App;