const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tennerdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;