// Configure the environment variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

// Add Configuration to be able to use env variables
var textapi = {
  application_key: process.env.API_KEY,
};

// Create an instance for the server
const express = require('express');
const app = express()

// Configure cors to avoid cors-origin issue
const cors = require('cors');
app.use(cors());

// Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')

// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
