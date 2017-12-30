const db = require("./db");

const commentRoutes = {
  getComments(req, res) {
    const post = db.posts[req.params.postId];
    res.status(200).send(post.comments);
  },
  addComment(req, res) {

  },
  updateComment(req, res) {

  },
  removeComment(req, res) {

  }
}

module.exports = commentRoutes
