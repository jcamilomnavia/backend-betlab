const { userAction, postAction, authAction } = require('../actions')
const validateAuthorization = require('./authorization')

const login = (_, args) => {
  let auth = authAction.login(args.email, args.password)
  return auth
}
const signUp = (_, args) => authAction.signup(args.data)

const CreateUser = (_, args) => userAction.createUser(args.data)
const UpdateUser = (_, args) => userAction.updateUser(args.id, args.data)

// const CreatePost = (_, args, context) => validateAuthorization(context, () => postAction.createPost(args.data))
// const UpdatePost = (_, args, context) => validateAuthorization(context, () => postAction.updatePost(args.id, args.data))
// const AddPost = (_, args, context) => validateAuthorization(context, () => userAction.addPost(args.id, args.post))

module.exports = {
  signUp,
  login,
  CreateUser,
  UpdateUser
  // CreatePost,
  // UpdatePost,
  // AddPost
}
