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
            <div id='header' className="header">
                <h1>MICHEL & ANGELO</h1>
            </div>
        );
    }
}
