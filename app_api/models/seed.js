const Mongoose = require('./db');
const Trip = require('./travlr'); // Import the Trip model


var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const seedDB = async () => {
    await Trip.deleteMany({}); // Clear the database
    await Trip.insertMany(trips); // Insert new data
};

seedDB().then(async () => {
    await Mongoose.connection.close(); // Close the connection
    process.exit(0); // Exit the process
});