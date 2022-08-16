const { Schema } = require('mongoose');


const cardSchema = new Schema(
  {
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image:{
      type: String
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = cardSchema;
