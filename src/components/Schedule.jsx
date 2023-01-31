import React from 'react';
import './styles/Schedule.css';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='schedule' className='schedule'>
                <div className='schedule-title'>
                    <h1>Schedule of Events</h1>
                    <span>all activities will take place at Beaches Resort - Turks and Caicos</span>
                </div>

                <div className='schedule-section-1'>
                    <div className='schedule-left'>
                        <h2>Feb 2, 2023</h2>
                        <h3>Thursday</h3>
                    </div>
                    <div className='schedule-right'>
                        <span>6pm | Welcome Party</span>
                        <span>Iguana Pool</span>
                        <span>White attire encouraged</span>
                    </div>
                </div>

                <div className='schedule-section-2'>
                    <div className='schedule-left'>
                        <h2>Feb 3, 2023</h2>
                        <h3>Friday</h3>
                    </div>
                    <div className='schedule-right'>
                        <span>2-5pm | Catamaran Excursion</span>
                    </div>
                </div>

                <div className='schedule-section-3'>
                    <div className='schedule-left'>
                        <h2>Feb 4, 2023</h2>
                        <h3>Saturday</h3>
                    </div>
                    <div className='schedule-right'>
                        <div className="schedule-item">
                            <span>3pm | Wedding Ceremony</span>
                            <span>Key West Beach</span>
                        </div>
                        <div className="schedule-item">
                            <span>4pm | Cocktail Reception</span>
                            <span>Key West Infinity Pool</span>
                        </div>

                        <div className="schedule-item">
                            <span>5-10pm | Dinner & Drinks</span>
                            <span>Arizona Beach</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
