const db = require("./db");

const commentRoutes = {
  getComments(req, res) {
    const post = db.posts[req.params.postId];
    res.status(200).send(post.comments);
  },
  addComment(req, res) {
    const post = db.posts[req.params.postId]
    const newComment = req.body             // Obtains the content of the new post from the request body
    const id = post.comments.length         // Creates a new ID based on the current number of comments
    posts.comments.push(newComment)         // Pushes the new post to the end of the db.posts array
    res.status(201).send({ id: id })        // Issues a 201 (Created) status and sends the ID of the new record
  },
  updateComment(req, res) {

  },
  removeComment(req, res) {

  }
}

module.exports = commentRoutes
