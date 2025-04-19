const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);
 

router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsList) // Add this line to handle GET requests for a specific trip code
    .post(tripsController.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // Add this line to handle POST requests for adding a review
    .put(tripsController.tripsUpdateTrip);    

module .exports = router;  