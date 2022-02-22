import React from 'react';
import './styles/Faq.css';

export default class Faq extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id='faq' className='faq'>
                <div className='faq-title'>
                    <h2>FAQ</h2>
                </div>

                <div className='faq-section-1'>
                    <p><strong>Is there transportation from the airport to the resort? </strong></p>
                    <p>answer</p>
                </div>

                <div className='faq-section-2'>
                    <p><strong>Is there a dress code at the resort?</strong></p>
                    <p>Answer</p>
                </div>

                {/* Left here for duplicating if more questions*/}
                <div className='faq-section-3'>
                    <p><strong></strong></p>
                    <p></p>
                </div>
            </div>
        )
    }
}
