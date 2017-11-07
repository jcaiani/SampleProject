/**
    @author Joseph Caiani

    @description Base reducer where all others will be added to provide the common store
    Currently we are using the contact reducer here.

 */

import {combineReducers} from 'redux';
import contactreduce from './contacts/ContactReduce';

export default combineReducers({
    contactreduce
});