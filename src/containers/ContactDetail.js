/**
    @author Joseph Caiani

    @description Contact detail component displaying a single contact.

 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Glyphicon, Grid, Col, Row} from 'react-bootstrap';
import {fetchContactDetail} from '../reducer/contacts/ContactReduce';
import {PageHeaderContent} from '../components/PageHeaderContent.js';
import {PanelContent} from '../components/PanelContent.js';

export class ContactDetail extends Component {
    constructor(props) {
        super(props);

        this.refresh = () => {
            const {dispatch, location} = this.props;
            dispatch(fetchContactDetail(parseInt(this.props.match.params.number.substr(1))));
        };
    }

    /**
     * componentDidMount
     * fetch the data when the component mounts
     * @param none
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
            isContactDetailFetching: PropTypes.bool,
            dispatch: PropTypes.func.isRequired,
            contact: PropTypes.object,
            contactDetailError: PropTypes.any,
            location: PropTypes.any
        }
    }
    /**
     *   Render our component.
     *   @param none
     */
    render() {
        const {isContactDetailFetching, contact} = this.props;
        const contactData = isContactDetailFetching ? null : contact;
        return (
                <div>
                    {
                        contactData ?
                            <div>
                                <PageHeaderContent
                                    title={contactData ? contactData.name: ""}
                                    email={contactData ? contactData.email : ""}
                                />
                                <Grid className="detailGrid">
                                    <Row>
                                        <Col md={6}>
                                            <PanelContent
                                                title="Corporate Information"
                                                contact={contactData}
                                            />

                                        </Col>
                                        <Col md={6}>
                                            <PanelContent
                                                title="Personal Information"
                                                contact={contactData}
                                            />
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        :
                            <div className="configuringMessage">
                                <Glyphicon glyph="refresh"/> Loading...
                            </div>
                    }
                </div>

        );
    }
}

function mapStateToProps(state) {
    const {contactreduce} = state;

    const {
        contact: contact,
        isContactDetailFetching,
        contactsDetailError,
    } = contactreduce  || {
        contact: null,
        isContactDetailFetching: true,
        contactsDetailError: null
    };

    return {
        contact,
        isContactDetailFetching,
        contactsDetailError
    }

}
export default connect(mapStateToProps)(ContactDetail);
