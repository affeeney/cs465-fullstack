const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt'); // Updated import syntax
const auth = jwt({ 
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'], 
  userProperty: 'payload' 
});



const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
        

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip); // Add this line to handle POST requests for adding a trip
 


router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // Add this line to handle POST requests for adding a review
    .put(auth, tripsController.tripsUpdateTrip);    

module.exports = router;  