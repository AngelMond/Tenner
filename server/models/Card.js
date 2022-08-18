const { Schema } = require('mongoose');


const cardSchema = new Schema(
  {
    role: {
      type: String
    },
    description: {
        type: String
    },
    basicPrice: {
        type: Number
    },
    standardPrice: {
      type: Number
    },
    premiumPrice: {
      type: Number
    },
    image:{
      type: String
    }
  }
);

module.exports = cardSchema;
