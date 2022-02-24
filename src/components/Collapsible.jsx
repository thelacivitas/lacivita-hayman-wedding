import React from 'react';
import PropTypes from 'prop-types';
import './styles/Collapsible.css';
import {BsChevronDown} from 'react-icons/bs'

export default class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div id='collapsible' className='collapsible'>
                <div onClick={() => this.toggle()} className='collapsible-question'>{this.props.question}<BsChevronDown style={{'padding-left': '10px'}}/></div>
                {this.state.open ? (<div className='collapsible-content'>{this.props.answer}</div>) : null}
            </div>
        );
    }
}

Collapsible.propTypes = {
    answer: PropTypes.string,
    question: PropTypes.string
}
