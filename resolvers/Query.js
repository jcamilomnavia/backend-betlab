const { userAction, postAction } = require('../actions')

const SearchUser = (_, args) => userAction.searchUserByEmail(args.email)
const User = (_, args) => userAction.user(args.id)
const Users = (_) => userAction.users()

// const hello = (_, { name }) => `Hello ${name || 'World'}`
// const Sum = (_, { value1, value2 }) => (value1 + value2)
// const Posts = (_) => postAction.posts()

module.exports = {
  User,
  Users,
  SearchUser
  // hello,
  // Sum,
  // Posts
}
