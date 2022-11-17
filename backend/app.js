const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./mongo');

var cors = require('cors')

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.post('/create', mongo.createBookmarks);

app.post('/get', mongo.getBookmarks);

app.listen(3001);

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoPractice = require('./mongoose');


// const app = express();

// app.use(bodyParser.json());

// app.post('/products', mongoPractice.createProduct);

// app.get('/products', mongoPractice.getProducts);

// app.listen(3000);