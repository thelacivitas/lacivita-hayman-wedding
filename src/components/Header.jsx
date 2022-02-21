import React from 'react';
import './styles/Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='header' className="key-west-beach-background header">
                <h1>MICHEL & ANGELO</h1>
                <h1>WE&apos;RE GETTING MARRIED</h1>
            </div>
        );
    }
}
