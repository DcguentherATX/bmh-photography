const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/pics', (req, res) => {
    console.log('get request');
    db.getImages({}, (err, data) => {
        if (err) {
            console.log('error on server side');
            res.end();
        } else {
            console.log('returned from db', data);
            res.send(data);
        }
    })
});

app.listen(port, () => console.log(`server is now listening on port ${port}`));