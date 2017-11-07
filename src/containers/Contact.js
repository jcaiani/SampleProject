/**
 * @author Joseph Caiani
 * @description The main contact page for the application. It will display
 * all contacts returned from rest.
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {OverlayTrigger, Glyphicon, Tooltip} from 'react-bootstrap';
import {TableHeader} from '../components/TableHeader.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchContactList, resetErrorState} from '../reducer/contacts/ContactReduce';
import {Link} from 'react-router-dom';

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.refresh = () => {
            const {dispatch} = this.props;
            dispatch(fetchContactList());
        };

        /**
         * @description Custom toolbar to rearrange the positions of search
         * @function
         */
        this.createCustomToolBar = props => {
            return (
                <TableHeader
                    total={4}
                    refreshAction={this.refresh}
                    sectionHeader="Contact List"
                    refreshButtonString="Refresh"
                    searchPanel={props.components.searchPanel}
                />
            );
        };
        /**
         * @description formatter for the name row of the table
         * @function
         */
        this.linkFormatter = (cell, row) => {
            // Build a link that will take the user to the details for this contact
            return <Link to={`contact/:${row.id}`} activeclassname="active">{cell}</Link>
        };

        /**
         * @description formatter for the tooltips
         * @function
         */
        this.tooltipFormatter = (cell, row) => {
            return (<OverlayTrigger placement="top"
                                    overlay={<Tooltip id={row.id}>{cell}</Tooltip>}><span>{cell}</span></OverlayTrigger>);
        };

        /**
         * @description formatter for the address column
         * @function
         */
        this.addressFormatter = (cell, row) => {
            return (
                <span>
                    <div>
                        {cell.street ? cell.street : ""} {cell.suite ? cell.suite : ""}
                    </div>
                    <div>
                        {cell.city ? cell.city : ""}, {cell.zipcode ? cell.zipcode : ""}
                    </div>
                </span>
                );
        }
    }

    /**
     * componentDidMount
     * Fetch the data when the component mounts
     * @function
     */
    componentDidMount() {
        this.refresh();
    }

    /**
     * Define any props we want to use for this component
     * @returns {{}}
     */
    static get propTypes() {
        return {
            isContactListFetching: PropTypes.bool,
            dispatch: PropTypes.func.isRequired,
            contacts: PropTypes.array,
            contactError: PropTypes.any
        }
    }

    /**
     * render the component
     * @returns {{}}
     */
    render() {
        const {isContactListFetching, contacts} = this.props;
        //options for the React bootstrap table
        const options = {
            toolBar: this.createCustomToolBar,
            noDataText: isContactListFetching ? (
                    <div className="fetch-spinner"><Glyphicon glyph="refresh"/>Fetching contact data please wait...</div>) :
                ''
        };
        const contactData = isContactListFetching ? [] : contacts;
        return (
            <div>
                <BootstrapTable
                    ref='contactTable'
                    data={contactData}
                    options={ options }
                    striped
                    hover
                    search
                    bordered={ false }>
                    <TableHeaderColumn dataField='id' isKey hidden={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort
                                       dataFormat={this.linkFormatter}>NAME</TableHeaderColumn>
                    <TableHeaderColumn dataField='username' dataSort
                                       dataFormat={this.tooltipFormatter}>USERNAME</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' dataSort
                                       dataFormat={this.tooltipFormatter}>EMAIL</TableHeaderColumn>
                    <TableHeaderColumn dataField='address' dataSort
                                       dataFormat={this.addressFormatter}>ADDRESS</TableHeaderColumn>
                </BootstrapTable>

            </div>

        );
    }
}

function mapStateToProps(state) {
    const {contactreduce} = state;

    const {
        contacts: contacts,
        isContactListFetching,
        contactsListError,
    } = contactreduce  || {
        contacts: [],
        isContactListFetching: true,
        contactsListError: null
    };

    return {
        contacts,
        isContactListFetching,
        contactsListError
    }

}
export default connect(mapStateToProps)(Contact);
