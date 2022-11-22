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
                    <Collapsible question={'Is there transportation from the airport to the resort?'}
                                 answer={'If you book through Donna, she will schedule transportation from the airport to the resort. If you book on your own, you will need to contact Beaches to arrange your transportation.'}
                    />
                </div>

                <div className='faq-section'>
                    <Collapsible question={'If we choose not to stay on the resort, what is the cost for a day pass to attend the wedding?'}
                                 answer={'Day (10am-6pm) and Evening (6pm-2am) passes are $370, the all day (10am-2am) pass is $700.'}/>
                </div>

                <div className='faq-section'>
                    <span>For all other questions, please refer to the <a target="_blank" rel="noreferrer" href="https://www.beaches.com/faqs/">Beaches FAQs</a> </span>
                </div>

            </div>
        )
    }
}
