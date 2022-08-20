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
        type: String
    },
    standardPrice: {
      type: String
    },
    premiumPrice: {
      type: String
    },
    image:{
      type: String
    }
  }
);

module.exports = cardSchema;
