const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');

// screams.js
// All screams
app.get('/screams', getAllScreams);
// Post one scream
app.post('/scream', FBAuth, postOneScream);

// users.js
// Signup route
app.post('/signup', signup);
// Login route
app.post('/login', login);
// Image upload
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.region('europe-west1').https.onRequest(app);
