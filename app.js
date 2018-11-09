const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('Always run.');
//     next();
// });

app.use('/users', (req, res, next) => {
    console.log(req.url);
    res.send('<p>Second exercise with express.js, listening requests from "/users"</p>');
});

app.use('/', (req, res, next) => {
    console.log(req.url);
    res.send('<p>Second exercise with express.js, listening requests from "/"</p>');
});

app.listen(3000);