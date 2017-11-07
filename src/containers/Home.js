/**
    @author Joseph Caiani

    @description Home component describing the app.

 */

import React from 'react';
import {JumboContent} from '../components/JumboContent';

export class Home extends React.Component {

    render() {
        return (
            <JumboContent
                title="Home Page"
                description="This application will list contacts in a tabular format. You can also view details of each contact in the table using its link in the 'Name' column. Enjoy the application and come back often."
                buttonText="View Contacts"
                buttonHref="#/contact"
            />
        );
    }
}