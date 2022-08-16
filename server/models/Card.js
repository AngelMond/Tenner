const { Schema, model } = require('mongoose');


const cardSchema = new Schema(
  {
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
