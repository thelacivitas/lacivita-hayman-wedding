import React from 'react';
import './styles/Rsvp.css';

export default class Rsvp extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id='rsvp' className='rsvp'>
                <div className="rsvp-title">
                    <h3>RSVP</h3>
                </div>

                <div className="rsvp-section-1">
                    <p>RSVP by calling our agent. Please review the Travel Section above.</p>
                </div>
            </div>
        )
    }
}
