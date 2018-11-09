const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'pulbic')));

app.use('/users', usersRouter);

app.listen(3000);