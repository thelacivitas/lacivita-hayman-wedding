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
                    <p>
                        <strong>COVID-19 Test:</strong> Required - taken within 72 hours prior to arrival
                    </p>
                    <p>
                        <strong>U.S. RE-ENTRY REQUIREMENTS: </strong>
                        All travelers to the US must provide proof of a negative COVID-19 test taken within one (1) day of travel or a positive COVID-19 test accompanied by a letter of verification that isolation requirements have been met. All US travelers must also complete an attestation form which will be provided at the airport.
                        FREE ON RESORT U.S. RE-ENTRY COVID-19 TEST
                    </p>
                    <p><a target="_blank" rel="noreferrer" href="https://www.beaches.com/covid-travel-advisories/turks-caicos/">Click Here for Travel Advisories</a></p>

                </div>
            </div>
        )
    }
}
