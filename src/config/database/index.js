const mongoose = require('mongoose');

const connect = async () => {
  try {
    mongoose
      .connect('mongodb://localhost:27017/make_cake_dev')
      .then(() => console.log('Connected MongoDB successfully!'));
  } catch (error) {
    console.log('Connect error', error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

module.exports = { connect };
