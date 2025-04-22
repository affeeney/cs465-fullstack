const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip); // Add this line to handle POST requests for adding a trip
 


router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // Add this line to handle POST requests for adding a review
    .put(tripsController.tripsUpdateTrip);    

module.exports = router;  