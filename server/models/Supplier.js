const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const cardSchema  = require('./Card');


const supplierSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String
    },
    card: [ cardSchema ]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
supplierSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  supplierSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  supplierSchema.virtual('cardCount').get(function () {
    return this.card.length;
  });

const Supplier = model('Supplier', supplierSchema);

module.exports = Supplier;
