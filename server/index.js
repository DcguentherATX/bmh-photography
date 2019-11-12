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
            // console.log('returned from db', data);
            res.send(data);
        }
    })
});

app.get('/search', (req, res) => {
    // console.log('search term', req.query.term);
    let term = req.query.term;
    db.searchImages({ searchTerm: term }, (err, data) => {
        if (err) {
            console.log('server search term error');
            res.end();
        } else {
            // console.log('returned from db', data)
            res.send(data);
        }
    })
})

app.get('/keyword', (req, res) => {
    let keyword = req.query.term;
    // console.log(keyword)
    db.searchKeyword({keyword: keyword}, (err, data) => {
        if (err) {
            console.log('error searching keyword in server', error);
            res.end();
        } else {
            console.log('keyword server success');
            res.send(data);
        }
    })
})

app.listen(port, () => console.log(`server is now listening on port ${port}`));