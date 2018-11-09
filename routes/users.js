const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.post('/add-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/users');
});


module.exports = router;