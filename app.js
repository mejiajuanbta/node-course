const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const bodyParser = require('body-parser');
// const rootDir = require('./util/path');
const securityParams = require('./models/auth');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

const store = new MongoDBStore({
    uri: securityParams.mongodb_url,
    collection: 'sessions' 
});

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'my retsec',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use('/users', usersRouter.router);
app.use('/products', productsRouter.router);

app.use('/', function(req, res, next) {
    // res.sendFile(path.join(rootDir, 'views', 'home.html'));
    // req.session.isLogged = false;
    res.render('home', { pageTitle: 'Home' });
});


app.listen(3000);