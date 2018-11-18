const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter.router);

app.use('/', function(req, res, next) {
    // res.sendFile(path.join(rootDir, 'views', 'home.html'));
    res.render('home', { pageTitle: 'Home' });
});


app.listen(3000);