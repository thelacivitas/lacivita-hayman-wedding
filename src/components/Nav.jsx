import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './styles/Nav.css'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id='nav' className='nav'>
                <ul className='navbar'>
                    <li>
                        <Link to='/#home' className="nav-link">HOME</Link>
                    </li>
                    <li>
                        <Link to='/#schedule' className="nav-link">SCHEDULE</Link>
                    </li>
                    <li>
                        <Link to='/#travel' className="nav-link">TRAVEL</Link>
                    </li>
                    <li>
                        <Link to='/#faq' className="nav-link">FAQ</Link>
                    </li>
                    <li>
                        <Link to='/#rsvp' className="nav-link">RSVP</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
