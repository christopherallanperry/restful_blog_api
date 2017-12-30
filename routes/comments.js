const db = require("./db");

const commentRoutes = {                       // GET request
  getComments(req, res) {
    const post = db.posts[req.params.postId]; // Obtains the post ID
    res.status(200).send(post.comments);      // Displays the comments for that post ID
  },
  addComment(req, res) {                      // POST request
    const post = db.posts[req.params.postId]  // Obtains the post ID
    const newComment = req.body               // Obtains the content of the new comment from the request body
    const id = post.comments.length           // Creates a new ID based on the current number of comments
    post.comments.push(newComment)            // Pushes the new comment to the end of the db.posts.comments
                                              // array
    res.status(201).send({ id: id })          // Issues a 201 (Created) status and sends the ID of the new
                                              // record
  },
  updateComment(req, res) {                           // PUT request
    const post = db.posts[req.params.postId]          // Obtains the post ID
    post.comments[req.params.commentId] = req.body;   // Updates the comment with the given comment ID
    res.status(200).send();                           // Issues a 200 (OK) status
  },
  removeComment(req, res) {                           // DELETE request
    const post = db.posts[req.params.postId]          // Obtains the post ID
    post.comments.splice(req.params.commentId, 1);    // Removes the comment with the given comment ID
    res.status(204).send();                           // Issues a 204 (No content) status
  }
}

module.exports = commentRoutes
