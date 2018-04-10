/**
 * This is the main file of the application. Run it with the
 * `node index.js` command from your terminal
 *
 * Remember to run `npm install` in the project folder, so 
 * all the required libraries are downloaded and installed.
 */ 

var express = require('express');

// Create a new express.js web app:

var app = express();
const PORT = process.env.PORT || 5000;

// Configure express with the settings found in
// our config.js file

require('./config')(app);


// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with 
// `node index.js`. Start the server!

//app.listen(8080);
//app.address().port
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

//console.log('Your application is running on http://localhost');
