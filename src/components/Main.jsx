import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Schedule from './Schedule';
import Travel from './Travel';
import Faq from './Faq';
// import Rsvp from './Rsvp';

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
                    <Faq/>
                    {/*TODO: Removing RSVP until we get code*/}
                    {/*<Rsvp/>*/}
                </header>
            </div>
        )
    }
}
