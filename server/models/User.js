// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       match: [/.+@.+\..+/, 'Must use a valid email address'],
//     },
//     password: {
//       type: String,
//       required: true,
//     }
//   },
//   // set this to use virtual below
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );



// const User = model('User', userSchema);

// module.exports = User;
