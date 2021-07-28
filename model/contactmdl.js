// Require the mongoose module
var mongoose = require('mongoose');

// Set up a mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/blog';
var mongoDB = "mongodb+srv://tcrape:RI63bLCewI@cluster0.upfni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',function() {
    console.log("we're connected")})

const contactPostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
        },

    email: {
        type: String,
        required: true,
        trim: true
        },

    message: {
        type: String,
        required: true,
        trim: true
        },
    }); 

module.exports.contact = mongoose.model('contact', contactPostSchema);