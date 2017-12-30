const db = require("./db");

const postRoutes = {
  getPosts(req, res) {
    res.status(200).send(db.posts)    // Issues a 200 (OK) status and sends the content of db.posts
  },
  addPost(req, res) {
    const id = db.posts.length        // Creates a new ID based on the current number of posts
    const newPost = req.body          // Obtains the content of the new post from the request body
    newPost.comments = []             // Sets the comments for the new post to an empty array
    db.posts.push(newPost)            // Pushes the new post to the end of the db.posts array
    res.status(201).send({ id: id })  // Issues a 201 (Created) status and sends the ID of the new record
  },
  updatePost(req, res) {
    
  },
  removePost(req, res) {

  }
}

module.exports = postRoutes
