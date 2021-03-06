const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { createUser, searchUserByEmail, searchUserById } = require('./UserActions')

const SECRET_KEY = process.env.SECRET_KEY

const signup = (email, password,username, name) => {
  return new Promise((resolve, reject) => {
    createUser(email, password, username, name).then(
      (user) => {
        const token = createToken(user)
        resolve({
          token,
          user
        })
      }
    ).catch(reject)
  })
}

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    searchUserByEmail(email).then((user) => {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) reject(err)
        isValid ? resolve({
          token: createToken(user),
          user
        }) : reject(new Error('Password does not match'))
      })
    }
    ).catch(reject)
  })
    .then(loginUser => {
      return loginUser
    })
    .catch((err) => { console.log(`user not exist err ${err}`) })
}

function getUserByAuthorization (authorization) {
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const { _id } = jwt.verify(token, SECRET_KEY)
    console.log(_id)
    return searchUserById(_id)
  }
  throw new Error('Not authenticated')
}

const createToken = ({ email, _id }) => {
  const exp = new Date().addDays(1).getTime()
  const payload = {
    _id,
    email,
    exp
  }
  return jwt.sign(payload, SECRET_KEY)
}

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

module.exports = {
  signup,
  login,
  getUserByAuthorization
}
