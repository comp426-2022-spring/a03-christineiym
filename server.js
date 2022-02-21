//// Creating the server ////
// Define named constants
const START_ARG_NUM = 2
const DEFAULT_PORT = 3000
const ERROR = 1
const HTTP_STATUS_OK = 200
const HTTP_STATUS_NOT_FOUND = 404

// Require Express.js
const express = require('express')
const app = express()

// Require minimist module to process one argument `--port=` on the command line after `node server.js`.
const minimist = require('minimist')
const { exit } = require('process')

// Define allowed argument name 'port'.
const arguments = minimist(process.argv.slice(START_ARG_NUM))
const argPort = arguments['port']

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = argPort || process.env.PORT || DEFAULT_PORT

// Import the coinFlips and countFlips functions from your coin.mjs file
import { coinFlips, countFlips } from './coin.mjs'

// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
})


//// API endpoints ////
// Default endpoint (for /app)
// It does not really care whether or not there are trailing slashes
app.get('/app', (req, res) => {
    // The app is up and running!
    res.status(HTTP_STATUS_OK).end('OK')
    res.type('text/plain')
})

// in Express, give parameters with :parameter
// Can replace :number with something else
app.get('/app/echo/:number', (req, res) => {
    // The app is up and running!
    res.status(HTTP_STATUS_OK).json({
        'message': req.params.number
    })
    res.type('text/plain')
})

function coinFlip() {
    // Randomize the flip with randomize or math
    return (Math.round(Math.random()) == 0) ? HEADS : TAILS
}

app.get('/app/flip', (req, res) => {
    var flip = coinFlip()
    res.status(HTTP_STATUS_OK).json({
        'flip': flip
    })
})

// Default response for any other request
app.use(function(req, res) {
    res.status(404).send('404 NOT FOUND')
})

// Check endpoint
app.get('/app/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200
    // Respond with status message "OK"
    res.statusMessage = 'OK'
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' })
    res.end(res.statusCode+ ' ' +res.statusMessage)
});

// Multiple flips
app.get('/app/flips/:number', (req, res) => {
	const flips = manyflips(req.params.number)
	//Other
	//expressions
	//go
	//here
});