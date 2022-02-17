const express = require('express')
const app = express()

var port = 3000

// why const?
const server = app.listen(port, () => {
    // Can do whatever want here, but good idea to log something out
    // console.log(`App is running on port ${port}`)

    // Can chain replace
    console.log('App is running on port %PORT%'.replace('%PORT%', port))
})

// Default endpoint
app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})