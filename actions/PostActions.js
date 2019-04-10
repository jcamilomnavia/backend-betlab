// const Post = require('../models/Post')

// const createPost = (data) => {
//   const { title, content } = data
//   return Post.create({ title, content })
//     .then((user) => user)
//     .catch((err) => { console.log(err) })
// }

// const updatePost = (id, data) => {
//   return Post.findByIdAndUpdate(id, { $set: data }, { new: true })
//     .then((postUpdated) => postUpdated)
// }

// const posts = () => {
//   return Post.find().exec()
//     .then((users) => users)
//     .catch((err) => {
//       console.log(`user not exist err ${err}`)
//     })
// }

// module.exports = {
//   createPost,
//   updatePost,
//   posts
// }
