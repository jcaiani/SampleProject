/**
    @author Joseph Caiani
    @description Base javascript file for the sample app for red hat.

    Pull out the dom elements we want to render react components to using the doc get element by id.

    I'm using one for navigation, and one for the rest of the app.

    Additionally, there are a couple important react/redux components here:

        1. The redux store is created in this file and its store is passed to the app
        via the provider component. Add the redux devtools here so they chrome dev tool
        auto enables.

        2. The react router is also located here and is what routes the single page
        application amongst the components in the containers directory.

 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import {NavigationBar} from "./components/NavigationBar";
import {Home} from "./containers/Home";
import Contact from "./containers/Contact";
import ContactDetail from "./containers/ContactDetail";
import {About} from "./containers/About";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer.js';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <div>
        <NavigationBar/>
    </div>,
document.getElementById('react-nav'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route path='/contact/:number' component={ContactDetail}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('react-container'));