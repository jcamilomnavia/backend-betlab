const { userAction } = require('../actions')
const validateAuthorization = require('./authorization')

const SearchUser = (_, args) => userAction.searchUserByEmail(args.email)
const SearchUserById = (_, args, context) => validateAuthorization(context, (user) => user)
const User = (_, args) => userAction.user(args.id)
const Users = (_) => userAction.users()

module.exports = {
  User,
  Users,
  SearchUser,
  SearchUserById
}
