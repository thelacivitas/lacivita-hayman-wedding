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
                    <h1>Schedule</h1>
                </div>

                <div className='schedule-section-1'>
                    <div className='schedule-left'>
                        <h2>Feb 2, 2023</h2>
                        <h3>Thursday</h3>
                    </div>
                    <div className='schedule-right'>
                        <span>Welcome Party</span>
                        <span>6-8pm</span>
                        <span>Location TBD</span>
                    </div>
                </div>

                <div className='schedule-section-2'>
                    <div className='schedule-left'>
                        <h2>Feb 3, 2023</h2>
                        <h3>Friday</h3>
                    </div>
                    <div className='schedule-right'>
                        <span>Catamaran Excursion</span>
                        <span>2-5pm</span>
                        <span>More info to come!</span>
                    </div>
                </div>

                <div className='schedule-section-3'>
                    <div className='schedule-left'>
                        <h2>Feb 4, 2023</h2>
                        <h3>Saturday</h3>
                    </div>
                    <div className='schedule-right'>
                        <span>Wedding Ceremony</span>
                        <span>3-4pm</span>
                        <span>Key West Beach</span>
                        <hr/>
                        <span>Cocktail Reception</span>
                        <span>4-5pm</span>
                        <span>Key West Infinity Pool</span>
                        <hr/>
                        <span>Wedding Reception</span>
                        <span>5pm</span>
                        <span>Arizona Beach</span>
                    </div>
                </div>

            </div>
        );
    }
}
