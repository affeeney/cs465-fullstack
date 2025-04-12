const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);
 

router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); // Add this line to handle GET requests for a specific trip code

module .exports = router;  