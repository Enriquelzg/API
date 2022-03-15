const express = require('express');

const app = express();

const routeruse = require('./routes/userRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/user', routeruse);

module.export = app;
