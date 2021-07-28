var express = require('express');
var rg = require('random-greetings')
var router = express.Router();
var moment = require('moment')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    greeting: rg.greet(),
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });
});

/* GET contact page. */
// router.get('/contact', function (req, res, next) {
//   res.render('contact');
// });
// router.post('/contact', function (req, res, next) {
//   console.log(req.body)
//   res.render('thankyou');
// });
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
