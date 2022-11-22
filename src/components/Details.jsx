import React from 'react';
import './styles/Details.css';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='details' className='details'>
                <div className='details-title'>
                    <h1>Details</h1>
                </div>

                <div className='details-section'>
                    <h3>Attire</h3>
                    <span>Dress Code: Beach Formal</span>
                    <span>The ceremony will take place on a beach, so choose footwear accordingly.</span>
                </div>

                <div className='details-section'>
                    <h3>Gifts</h3>
                    <span>Your presence at our wedding is more important to us than a gift. If you insist on a gift, please see our registry below</span>
                    <span><a target="_blank" rel="noreferrer" href="https://www.zola.com/registry/angeloandmichel">Registry</a></span>
                </div>

                <div className='details-section'>
                    <h3>Song Suggestions</h3>
                    <span>If you have any suggestions, please email us!</span>
                    <span><a href="mailto: michel.angelo.4ever@gmail.com">Email Us</a></span>
                </div>

            </div>
        );
    }
}
