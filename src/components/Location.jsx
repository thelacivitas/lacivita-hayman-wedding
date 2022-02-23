import React from 'react';
import './styles/Location.css';

export default class Location extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id='location' className='location'>
                <div className="location-title">
                    <h2>Location</h2>
                </div>
                <div className="location-section-1">
                    <div className="location-left">

                    </div>
                    <div className="location-right">
                        <a href="https://www.beaches.com/resorts/turks-caicos/" target="}_blank">Beaches Resort - Turks and Caicos</a>
                        Address: Lower Bight Rd, The Bight Settlement TKCA 1ZZ, Turks & Caicos Islands
                        Explore the website and look at what the beautiful resort has to offer.
                    </div>
                </div>
            </div>
        )
    }
}
