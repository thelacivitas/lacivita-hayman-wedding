import React from 'react';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id='home'>
                <div className='home-section-1'>
                    <h3>We&apos;re Getting Married</h3>
                </div>
                <div className='home-section-2'>
                    <h3>Michel Hayman and Angelo LaCivita</h3>
                </div>
                <div>
                    <h3>on February 4th, 2023</h3>
                    <h3>In Turks and Caicos</h3>
                </div>

            </div>
        )
    }
}
