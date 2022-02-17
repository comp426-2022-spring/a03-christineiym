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

// Default endpoint (for /app)
// It does not really care whether or not there are trailing slashes
app.get('/app', (req, res) => {
    // The app is up and running!
    res.status(200).end('OK')
    res.type('text/plain')
})

// in Express, give parameters with :parameter
// Can replace :number with something else
app.get('/app/echo/:number', (req, res) => {
    // The app is up and running!
    res.status(200).json({
        'message': req.params.number
    })
    res.type('text/plain')
})

// Endpoint does not exist; catch-all
app.use(function(req, res) {
    // can also use .end -> plain text
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})