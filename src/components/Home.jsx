import React from 'react';
import './styles/Home.css'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id='home' className='home'>
                <div className='key-west-beach-background'>
                    <div className='home-section-1'>
                        <h2>WE&apos;RE GETTING MARRIED!</h2>
                    </div>
                    <div className='home-section-2'>
                        <h2>MICHEL HAYMAN AND ANGELO LACIVITA</h2>
                    </div>
                    <div className='home-section-3'>
                        <div>
                            <h1>ON</h1>
                            <h3>February 4th, 2023</h3>
                        </div>
                        <div>
                            <h1>IN</h1>
                            <h3>Turks and Caicos</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
