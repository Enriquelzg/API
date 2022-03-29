const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;

const db = process.env.MONGODB || 'mongodb://127.0.0.1:27017/API';

// const db = 'mongodb://localhost:27017/API';

mongoose.connect(db, (err) => {
  if (err) console.log(`ERROR: connecting to Database. ${err}`);
  else app.listen(port, () => { console.log(`Node server running on http://localhost:${port}`); });
  // console.log('Despues del else');
});
