import React from 'react';
import Header from './Header';
// import Nav from './Nav';
import Home from './Home';
import Schedule from './Schedule';
import Travel from './Travel';
import Location from './Location';
import Footer from './Footer';
import Advisories from './Advisories';
import Faq from './Faq';
import Details from './Details';

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
                    {/*<Nav/>*/}
                    <Home/>
                    <Schedule/>
                    <Details/>
                    <Travel/>
                    <Advisories/>
                    <Location/>
                    <Faq/>
                    <Footer/>
                </header>
            </div>
        )
    }
}
