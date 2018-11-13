const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'users.html'));
    res.render('users', { pageTitle: 'Users list', userList: users });
});

router.post('/add-user', (req, res, next) => {
    users.push(req.body.username);
    res.redirect('/users');
});


module.exports = {
    router,
    users
}