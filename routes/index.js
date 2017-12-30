const posts = require("./posts");
// const comments = require("./comments");

module.exports = (baseUrl, app) => {
  app.get(baseUrl + "posts", posts.getPosts)

}
