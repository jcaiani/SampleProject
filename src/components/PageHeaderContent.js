/**
 * @author Joseph Caiani
 * @description Common component: Page header for contact detail pages.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PageHeader, Button, Glyphicon} from 'react-bootstrap';

export class PageHeaderContent extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Define the propType definitions for this component
     * @returns {{}}
     */
    static get propTypes() {
        return {
            title: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        };
    }

    render() {
        const {title, email} = this.props;
           return (
               <PageHeader>
                   {title} <small><a href={`mailto:${email}`}>{email}</a></small>
                   <span className="pull-right">
                       <Button bsStyle="primary" href="/#/contact"><Glyphicon glyph="arrow-left"/> Back to Contacts
                       </Button>
                   </span>
               </PageHeader>
           );
    }
}
