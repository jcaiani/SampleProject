/**
    @author Joseph Caiani

    @description This is the reducer for the application. Since we only have one subject, contacts,
    this is the only reducer but that can be updated in the future.

    We created all actions here for 2 fetches and 1 reset error action.
    We want to dispatch actions when the request is sent, received, and on error.

    Here it is IMPORTANT for state to be immutable.
 */

import ContactService from './ContactService';

export const REQUEST_CONTACT_LIST = 'contacts/REQUEST_CONTACT_LIST';
export const RECEIVE_CONTACT_LIST = 'contacts/RECEIVE_CONTACT_LIST';
export const RECEIVE_CONTACT_LIST_ERROR = 'contacts/RECEIVE_CONTACT_LIST_ERROR';
export const REQUEST_CONTACT_DETAIL = 'contacts/REQUEST_CONTACT_DETAIL';
export const RECEIVE_CONTACT_DETAIL = 'contacts/RECEIVE_CONTACT_DETAIL';
export const RECEIVE_CONTACT_DETAIL_ERROR = 'contacts/RECEIVE_CONTACT_DETAIL_ERROR';
export const REQUEST_RESET_ERROR_STATE = 'contacts/RESET_ERROR_STATE';

export function contacts(state = {
    isContactListFetching: false,
    isContactDetailFetching: false,
    contactListError: null,
    contacts: [],
    contactDetailError: null,
    contact: null
}, action ) {
    switch (action.type) {
        case REQUEST_RESET_ERROR_STATE:
            return {
                ...state,
                contactListError: null
            };
        case REQUEST_CONTACT_LIST:
            return {
                ...state,
                isContactListFetching: true,
                contactListError: null
            };
        case RECEIVE_CONTACT_LIST:
            return {
                ...state,
                isContactListFetching: false,
                contacts: action.contacts
            };
        case RECEIVE_CONTACT_LIST_ERROR:
            return {
                ...state,
                isContactListFetching: false,
                contacts: [],
                contactListError: action.error
            };
        case REQUEST_CONTACT_DETAIL:
            return {
                ...state,
                isContactDetailFetching: true,
                contactDetailError: null
            };
        case RECEIVE_CONTACT_DETAIL:
            return {
                ...state,
                isContactDetailFetching: false,
                contact: action.contact
            };
        case RECEIVE_CONTACT_DETAIL_ERROR:
            return {
                ...state,
                isContactDetailFetching: false,
                contact: [],
                contactDetailError: action.error
            };
        default:
            return state
    }
}

export default function reducer(state = {
    isContactListFetching: false,
    isContactDetailFetching: false,
    contactListError: null,
    contacts: [],
    contactDetailError: null,
    contact: null
}, action) {
    switch (action.type) {
        case REQUEST_CONTACT_LIST:
        case RECEIVE_CONTACT_LIST:
        case RECEIVE_CONTACT_LIST_ERROR:
        case REQUEST_CONTACT_DETAIL:
        case RECEIVE_CONTACT_DETAIL:
        case RECEIVE_CONTACT_DETAIL_ERROR:
        case REQUEST_RESET_ERROR_STATE:
            return Object.assign({}, state, contacts(state, action));
        default:
            return state
    }
}

export function requestContacts() {
    return {
        type: REQUEST_CONTACT_LIST
    }
}

function receiveContacts(json) {
    return {
        type: RECEIVE_CONTACT_LIST,
        contacts: json
    }
}

export function requestContactDetail() {
    return {
        type: REQUEST_CONTACT_DETAIL
    }
}

function receiveContactDetail(json) {
    return {
        type: RECEIVE_CONTACT_DETAIL,
        contact: json
    }
}

function receiveContactDetailError(error) {
    return {
        type: RECEIVE_CONTACT_DETAIL_ERROR,
        error: error
    }
}

function receiveContactsListError(error) {
    return {
        type: RECEIVE_CONTACT_LIST_ERROR,
        error: error
    }
}

export function requestResetErrorState() {
    return {
        type: REQUEST_RESET_ERROR_STATE
    }
}

/**
 * Async fetch Contact list from Backend
 */
export function fetchContactList() {
    return dispatch => {
        dispatch(requestContacts());
        const contactService = new ContactService();

        return contactService.fetchContactList()
            .then(contacts => {
                //Dispatch new reducer state on receiveStats.
                dispatch(receiveContacts(contacts) )
            })
            .catch(error => {
                dispatch(receiveContactsListError(error))
            });

    }
}

/**
 * Async fetch single contact from Backend
 * @param id
 */
export function fetchContactDetail(id) {
    return dispatch => {
        dispatch(requestContactDetail(id));
        const contactService = new ContactService();
        return contactService.fetchContactDetail(id)
            .then(contact => {
                //Dispatch new reducer state on receiveStats.
                dispatch(receiveContactDetail(contact) )
            }).catch(e => {
                dispatch(receiveContactDetailError(e));
            });

    }
}

/**
 * Async reset to a clean error state
 */
export function resetErrorState() {
    return dispatch => {
        return dispatch(requestResetErrorState());
    }
}
