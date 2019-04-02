var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var pwofRouter = require('./routes/PwofRouter');

require('dotenv').config();

app.use(cors());
app.use(bodyParser());

app.use('/pwof', pwofRouter);

console.log('Starting app at: localhost:3500');

app.listen(process.env.PORT || 3500);
