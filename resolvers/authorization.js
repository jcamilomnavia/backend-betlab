const { authAction } = require('../actions')

const validateAuthorization = (context, handler) => {
  const authorization = context.request.get('Authorization')
  return authAction.getUserByAuthorization(authorization).then(user => handler(user))
}

module.exports = validateAuthorization
