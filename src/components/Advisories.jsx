import React from 'react';
import './styles/Advisories.css'

export default class Advisories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='advisories' className='advisories'>

                <div className="advisories-title">
                    <h1>Turks & Caicos Travel Requirements</h1>
                </div>

                <div className='advisories-info'>
                    <p>
                        <strong>Vaccination: </strong> All visitors 18 years of age and over must be fully vaccinated with all doses of the COVID-19 vaccine at least 14 days before arrival.
                    </p>
                    <p>Please refer to the link below for the most up to date COVID Travel Requirments.</p>
                    <p><a target="_blank" rel="noreferrer" href="https://www.beaches.com/covid-travel-advisories/turks-caicos/">Click Here for Travel Advisories</a></p>

                </div>
            </div>
        )
    }
}
