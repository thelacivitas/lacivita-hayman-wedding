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
                        <h1>WE&apos;RE GETTING MARRIED!</h1>
                    </div>
                </div>
                <div className='home-section-2'>
                    <div>
                        <h2> MICHEL HAYMAN</h2>
                    </div>
                    <div>
                        <h4>AND</h4>
                    </div>
                    <div>
                        <h2>ANGELO LACIVITA</h2>
                    </div>
                </div>
                <div className='home-section-3'>
                    <div>
                        <h3>ON</h3>
                        <h1>February 4th, 2023</h1>
                    </div>
                    <div>
                        <h3>IN</h3>
                        <h1>Turks and Caicos</h1>
                    </div>
                </div>
            </div>
        )
    }
}
