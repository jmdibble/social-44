const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const {
  getAllScreams,
  postOneScream,
  getScream,
  commentOnScream,
  likeScream,
  unlikeScream,
  deleteScream
} = require('./handlers/screams');
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require('./handlers/users');

// screams.js
// All screams
app.get('/screams', getAllScreams);
// Post one scream
app.post('/scream', FBAuth, postOneScream);
// Get screams
app.get('/scream/:screamId', getScream);
// Add comment
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
// Like a scream
app.get('/scream/:screamId/like', FBAuth, likeScream);
// Unlike a scream
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
// Delete a scream
app.delete('/scream/:screamId', FBAuth, deleteScream);

// users.js
// Signup route
app.post('/signup', signup);
// Login route
app.post('/login', login);
// Image upload
app.post('/user/image', FBAuth, uploadImage);
// Optional fields
app.post('/user', FBAuth, addUserDetails);
// Like route
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.region('europe-west1').https.onRequest(app);
