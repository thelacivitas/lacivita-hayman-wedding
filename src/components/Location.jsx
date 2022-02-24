import React from 'react';
import './styles/Location.css';
import beach from './img/resort-beach.jpg'

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
                    <h1>Location</h1>
                </div>
                <div className="location-section-1">
                    <div className="location-left">
                        <img src={beach} width='75%' height='75%' alt={'beach'}/>
                    </div>
                    <div className="location-right">
                        <span><a href="https://www.beaches.com/resorts/turks-caicos/" target="}_blank">Beaches Resort - Turks and Caicos</a></span>
                        <span><strong>Address</strong>: Lower Bight Rd, The Bight Settlement TKCA 1ZZ, Turks & Caicos Islands</span>
                        <span>Explore the website and review the amenities and activities this beautiful resort has to offer.</span>
                    </div>
                </div>
            </div>
        )
    }
}
