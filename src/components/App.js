import React from 'react';
import NavBar from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import MainDisplay from '../components/MainDisplay';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        }

        // bind functions here
    }

    render() {
        return (
            <div>
                <NavBar />
                <About />
                <MainDisplay />
                <Footer />
            </div>
        )
    }
}

export default App;