import React from 'react';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='schedule'>
                {/*<h3>Where: <a href="https://www.beaches.com/resorts/turks-caicos/" target="_blank" rel="noreferrer">Beaches Resort - Turks & Caicos</a></h3>*/}
                {/*<h3>When: February 4th, 2023</h3>*/}

                <h2>Schedule</h2>
                <h3>Welcome Party</h3>
                <p>Starts Thursday Feb 3, 3pm @ Key West Infinity Pool</p>

                <h3>Rehearsal Brunch</h3>
                <p>Friday 12pm @ Restaurant TBD</p>

                <h3>Catamaran Cruise</h3>
                <p>Friday 2pm @ Docks</p>

                <h3>Reception</h3>
                <p>Saturday 3pm @ Key West Beach</p>
            </div>
        );
    }
}
