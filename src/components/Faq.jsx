import React from 'react';
import './styles/Faq.css';
import Collapsible from './Collapsible';

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
                    <h1>FAQ</h1>
                </div>

                <div className='faq-section'>
                    <Collapsible question={'Is there transportation from the airport to the resort?'} answer={'answer'}/>
                </div>

                <div className='faq-section'>
                    <Collapsible question={'Is there a dress code at the resort?'} answer={'answer'}/>
                </div>

            </div>
        )
    }
}
