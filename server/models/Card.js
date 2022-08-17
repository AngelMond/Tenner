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
  }
);

module.exports = cardSchema;
