const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, required: true },
  username: { type: String, required: true }
  // level: { type: Number, default: 0 },
  // course: [{
  //   name: String,
  //   hour: Number
  // }],
  // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

UserSchema.pre('save', function (next) {
  let user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
