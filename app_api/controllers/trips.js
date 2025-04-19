const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Import the Trip model
const Model = mongoose.model('trips'); // Import the Mongoose model

const tripsList = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

    
    if(!q)
    { 
        return res
            .status(404)
            .json(err);
    }
    else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const query = await Model
        .find({'code' : req.params.tripCode})
        .exec();

    if(!q)
    { 
        return res
            .status(404)
            .json(err);
    }
    else {
        return res
            .status(200)
            .json(q);
    }

}; 

const tripsAddTrip = async (req, res) => {
    const q = await Model.create(
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)
                    .json(err);
            } else {
                return res
                    .status(201)
                    .json(trip);
            }
        }
    );
};

const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if (!q) {
        // Database returned no data
        return res
            .status(400)
            .json({ message: 'Trip not found or update failed' }); // 'err' wasn't defined
    } else {
        // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip 
};
  