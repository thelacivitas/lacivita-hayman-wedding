import React from 'react';
import './styles/Travel.css'

export default class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='travel' className='travel'>

                <div className='left'>
                    <h1>Travel</h1>
                </div>

                <div className='right'>
                    <p><a href="https://www.beaches.com/resorts/turks-caicos/" target="_blank" rel="noreferrer">Beaches Resort - Turks & Caicos</a></p>

                    <p>
                        Please contact our booking agent Donna Jaworski at Cadillac Travel Group to handle your bookings.
                        Keep in mind flights will not be available until 10 months prior to the wedding date.
                    </p>

                    <p>(248) 358-5330 EXT 122</p>
                    <p>donna@cadillactravel.com</p>
                </div>
            </div>
        )
    }
}
