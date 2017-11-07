/**
 * @author Joseph Caiani
 * @description Common component: jumbo tron for home page.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Button} from 'react-bootstrap';

export class JumboContent extends React.Component {
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
            description: PropTypes.string.isRequired,
            buttonText: PropTypes.string,
            buttonHref: PropTypes.string
        };
    }

    /**
     * Define the default propType definitions for this component
     * @returns {{}}
     */
    static get defaultProps() {
        return {
            title: "About",
            description: "This is version 1.0 of Sample Project."
        }
    }

    render() {
        const {title, description, buttonText, buttonHref} = this.props;
           return (
                <Jumbotron>
                    <h1>{title}</h1>
                    <p>{description}</p>
                       {
                           buttonText ?
                               <p>
                                   <Button bsStyle="primary" href={buttonHref}>
                                       {buttonText}
                                   </Button>
                               </p>
                               : null
                       }
                </Jumbotron>
       );
    }
}