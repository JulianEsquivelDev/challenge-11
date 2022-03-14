// use require to call our npm package "express"
const express = require('express');
// instantiate the server
const app = express();
// identify PORT so it can be connected to Heroku 
const PORT = process.env.PORT || 3001;
// require path to load html on the server
const path = require('path');
// use app.get to send index.html file to the 3001 server to be presented on the page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
// since this is our second route we need to identify it since its not an api and its an HTML page. We called "/notes" instead of just "/".
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
// make server listen
app.listen(PORT, () => {
    console.log('API server now on port ${PORT}.');
});

// test to see if server is working
//app.get('/', (req, res) => {
//    res.send('Hello Julian.')
//})

