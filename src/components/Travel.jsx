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

                <div className="travel-title">
                    <h1>Travel</h1>
                </div>

                <div className='travel-info'>

                    <p>
                        Please contact our booking agent Donna Jaworski at Cadillac Travel Group to handle your bookings.
                        Keep in mind flights will not be available until 10 months prior to the wedding date.
                        If you would prefer to book your own travel arrangements, you may book directly through the Beaches website.
                    </p>

                    <p>(248) 358-5330 EXT 122</p>
                    <p><a href="mailto: donna@cadillactravel.com">donna@cadillactravel.com</a></p>
                </div>
            </div>
        )
    }
}
