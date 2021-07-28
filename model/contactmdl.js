// mongoose module
var mongoose = require('mongoose');

// mongoose and database connection
var mongoDB = "mongodb+srv://tcrape:RI63bLCewI@cluster0.upfni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get mongoose connection
var db = mongoose.connection;

// Connection errors notification
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//confirm connection
db.once('open',function() {
    console.log("we're connected")})

// Post schema
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