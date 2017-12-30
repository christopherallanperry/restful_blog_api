const homeRoute = {
  getHome(req, res) {                                 // GET request
    res.status(200).send('This is the home page')     // Issues a 200 (OK) status and sends a message
  }
}

module.exports = homeRoute
