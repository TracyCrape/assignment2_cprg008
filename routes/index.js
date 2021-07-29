var express = require('express');
var rg = require('random-greetings')
var router = express.Router();
var moment = require('moment')

const greeting = ["Hello", "Bonjour", "Hi", "Hola", "Ciao", "Kon'nichiwa", "Aloha"];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    greeting: greeting[Math.floor(Math.random() * greeting.length)],
    time: moment().utc().format("MMMM Do YYYY, h:mm a UTC"),
  });
});

/* GET register page. */
router.get('/register', function (req, res, next) {
  res.render('register');
});
/* GET packages page. */
router.get('/packages', function (req, res, next) {
  res.render('packages');
});
/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about');
});
/* GET thank you. */
router.get('/thankyou', function (req, res, next) {
  res.render('thankyou');
});
/* GET 404 page. */
router.get('/404', function (req, res, next) {
  res.render('404');
});
module.exports = router;
