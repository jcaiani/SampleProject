/**
 * @author Joseph Caiani
 * @description main file for starting express when running npm start
 * @type {*|createApplication}
 */
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});