const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect('mongodb://localhhost/userController', (err) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  } else {
    app.listen(3000);
    console.log('Node server running on http://localhost:3000');
  }
});
