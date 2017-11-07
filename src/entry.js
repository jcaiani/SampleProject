/**
    @author Joseph Caiani

    @description Entry class for the sample react app for redhat. Require all top level
    classes, html files, and css in this file.

 */
require('../dist/index.html');
require('./App.js');
require('./reducer/contacts/ContactService.js');
require('./reducer/contacts/ContactReduce.js');
require('./reducer/reducer.js');
require('./components/componentStyles.css');
require('./containers/containerStyles.css');
require('../node_modules/react-bootstrap-table/css/react-bootstrap-table.css');

