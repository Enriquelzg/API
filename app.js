const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = require('./routes/userRoutes');

app.use(router);

const userController = require('./controllers/userController');

app.use('/api', userController);
