const db = require("../db/db");

const postRoutes = {
  getPosts(req, res) {                // GET request
    res.status(200).send(db.posts)    // Issues a 200 (OK) status and sends the content of db.posts
  },
  showPost(req, res) {                // GET request
    const post = db.posts[req.params.postId]  // Gets IS for specified post
    res.status(200).send(post)                // Issues a 200 (OK) status and sends the content of the
                                              // specified post
  },
  addPost(req, res) {                 // POST request
    const id = db.posts.length        // Creates a new ID based on the current number of posts
    const newPost = req.body          // Obtains the content of the new post from the request body
    newPost.comments = []             // Sets the comments for the new post to an empty array
    db.posts.push(newPost)            // Pushes the new post to the end of the db.posts array
    res.status(201).send({ id: id })  // Issues a 201 (Created) status and sends the ID of the new record
  },
  updatePost(req, res) {                    // PUT request
    db.posts[req.params.postId] = req.body // Updates the post with the given post ID
    res.status(200).send()                 // Issues a 200 (OK) status
  },
  removePost(req, res) {                    // DELETE request
    db.posts.splice(req.params.postId, 1);  // Removes the post with the given post ID
    res.status(204).send();                 // Issues a 204 (No content) status
  }
}

module.exports = postRoutes
