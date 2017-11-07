/**
 * @author Joseph Caiani
 * @description Common component: Table Header Common Component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar} from 'react-bootstrap';

export class TableHeader extends Component {

    constructor(props) {
        super(props);

    }

    /**
     * Define any props we want to use for this component
     * @returns {{}}
     */
    static get propTypes() {
        return {
            total: PropTypes.number,
            showTotal: PropTypes.bool,
            refreshAction: PropTypes.func,
            sectionHeader: PropTypes.string.isRequired,
            refreshButtonString: PropTypes.string,
            searchPanel: PropTypes.object
        }
    }

    /**
     * Define any default props we want to use for this component
     * @returns {{}}
     */
    static get defaultProps() {
        return {
            showTotal: true
        }
    }

    render() {
        const {
            sectionHeader, refreshAction, total, showTotal, searchPanel
        } = this.props;

        // Header title
        const sectionTitle = sectionHeader ?
            <span className="tableTitle text-nowrap">{sectionHeader}{showTotal ?
                <span className="tableTitleTotal">({total})</span> : ''}</span> : '';


        return (
            <div>
            <div className="commonTableHeader">
                {sectionTitle}
                <ButtonToolbar className="rightContent">
                    {
                        refreshAction ?
                            <Button
                                bsStyle='primary'
                                onClick={refreshAction}
                            >Refresh Contacts
                            </Button>
                            : null
                    }
                </ButtonToolbar>
            </div>
                <span className="tableTitle">{searchPanel}</span>

            </div>
        );
    }
}