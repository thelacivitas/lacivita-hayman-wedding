import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Schedule from './Schedule';
import Travel from './Travel';
import Location from './Location';
import Footer from './Footer';
// import Faq from './Faq';

export default class Main extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Nav/>
                    <Home/>
                    <Schedule/>
                    <Travel/>
                    <Location />
                    {/*<Faq/>*/}
                    <Footer/>
                </header>
            </div>
        )
    }
}
