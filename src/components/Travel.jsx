import React from 'react';

export default class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='travel'>
                <h3>Contact Donna Jaworski at Caddilac Travel Group</h3>
                <p>(248) 358-5330 EXT 122</p>
                <p>donna@cadillactravel.com</p>
            </div>
        )
    }
}
