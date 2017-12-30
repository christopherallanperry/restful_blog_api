const posts = require("./posts");
const comments = require("./comments");

module.exports = (baseUrl, app) => {
  app.get(baseUrl + "posts", posts.getPosts)
  app.post(baseUrl + "posts", posts.addPost)
  app.put(baseUrl + "posts/:postId", posts.updatePost)
  app.delete(baseUrl + "posts/:postId", posts.removePost)

}
