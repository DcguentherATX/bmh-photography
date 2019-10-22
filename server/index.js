const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    console.log('get request');
});

app.listen(port, () => console.log(`server is now listening on port ${port}`));