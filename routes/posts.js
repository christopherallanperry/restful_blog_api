const db = require("./db");

const postRoutes = {
  getPosts(req, res) {
    res.status(200).send(db.posts)
  },
  addPost(req, res) {

  },
  updatePost(req, res) {

  },
  removePost(req, res) {

  }
}

module.exports = postRoutes
