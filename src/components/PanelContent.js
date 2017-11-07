/**
 * @author Joseph Caiani
 * @description Common component: Panel Component for showing detail panels.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Panel, Row, Col} from 'react-bootstrap';

export class PanelContent extends React.Component {
    constructor(props) {
        super(props);

        /**
         * Generate some content for the personal data panel
         * @returns {{}}
         *
         */
        this.getPersonalData = () => {
            const {contact} = this.props;
            let dataPairs = {};
            for (const key of Object.keys(contact)) {
                switch (key) {
                    case 'name':
                        dataPairs["Name"] = contact[key];
                        break;
                    case 'username':
                        dataPairs["Username"] = contact[key];
                        break;
                    case 'phone':
                        dataPairs["Phone"] = contact[key];
                        break;
                    case 'website':
                        dataPairs["Website"] = contact[key];
                        break;
                }
            }
            return dataPairs;
        };

        /**
         * Generate some content for the corporate data panel
         * @returns {{}}
         */
        this.getCorporateData = () => {
            const {contact} = this.props;
            let dataPairs = {};
            for (const key of Object.keys(contact)) {
                switch (key) {
                    case 'company':
                        dataPairs["Name"] = contact[key].name;
                        dataPairs["Phrase"] = contact[key].catchPhrase;
                        dataPairs["Strategy"] = contact[key].bs;
                }
            }
            return dataPairs;
        };
    }

    /**
     * Define the propType definitions for this component
     * @returns {{}}
     */
    static get propTypes() {
        return {
            title: PropTypes.string.isRequired,
            contact: PropTypes.object
        };
    }

    render() {
        const {title, contact} = this.props;
        let data;
        let style;
        if(title === "Personal Information" && contact) {
            data = this.getPersonalData();
            style="success";
        } else {
            data = this.getCorporateData();
            style="info";
        }
        const items = Object.keys(data).map((key, i) =>
            <Row key={`row${i}`} className="show-grid">
                <Col key={`key${i}`} md={2}><strong>{key}: </strong></Col>
                <Col key={`val${i}`} md={2}>{key==="Website" ?
                    <a key={i} href={data[key]}>{data[key]}</a>
                    : data[key]}</Col>
            </Row>
        );
        return (
           <Panel header={title} bsStyle={style}>
               <Grid>
                   {items}
               </Grid>
           </Panel>

        );
    }
}
