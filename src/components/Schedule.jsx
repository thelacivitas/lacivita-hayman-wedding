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
                        <h3>Feb 2, 2023</h3>
                        <h3>Thursday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h4>Welcome Party</h4>
                        <h4>6-8pm</h4>
                        <h4>Location: TBD</h4>
                        <h4>Please wear white!</h4>
                    </div>
                </div>

                <div className='schedule-section-2'>
                    <div className='schedule-left'>
                        <h3>Feb 3, 2023</h3>
                        <h3>Friday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h4>Catamaran Excursion</h4>
                        <h4>2-5pm</h4>
                        <h4>More info: Coming soon!</h4>
                    </div>
                </div>

                <div className='schedule-section-3'>
                    <div className='schedule-left'>
                        <h3>Feb 4, 2023</h3>
                        <h3>Saturday</h3>
                    </div>
                    <div className='schedule-right'>
                        <h4>Wedding Ceremony</h4>
                        <h4>3-4pm</h4>
                        <h4>Location: Key West Beach</h4>
                        <hr/>
                        <h4>Cocktail Reception</h4>
                        <h4>4-5pm</h4>
                        <h4>Location: Key West Infinity Pool</h4>
                        <hr/>
                        <h4>Wedding Reception</h4>
                        <h4>5pm</h4>
                        <h4>Location: Arizona Beach</h4>
                    </div>
                </div>

            </div>
        );
    }
}
