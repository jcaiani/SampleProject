/**
 * @author Joseph Caiani
 * @description The about page showing the verstion of the app.
 *
 */
import React from 'react';
import {JumboContent} from '../components/JumboContent';

export class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <JumboContent/>
        );
    }
}