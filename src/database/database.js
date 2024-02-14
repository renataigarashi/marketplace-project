const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/user', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      return console.log(`Error connection database: ${err}`);
    });
};

module.exports = connectToDatabase;
