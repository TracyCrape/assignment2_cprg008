var express = require('express');
var router = express.Router();

const Contact = require('../model/contactmdl').contact


router.get("/", (req, res, next) => {
    res.render("contact")
})
router.post("/", (req, res, next) => {
    const contact = new Contact();
    contact.name = req.body.name
    contact.email = req.body.email
    contact.message = req.body.message
    console.log (contact)
    contact.save(err => {
        // if(err) throw err;
        if (err) {
            console.log (err)
          const errorArray = [];
          const errorKeys = Object.keys(err.errors);
          errorKeys.forEach(key => errorArray.push(err.errors[key].message));
          return res.render("/", {
            errors: errorArray
          });
        }
    
        res.render("thankyou",{
          name: contact.name
        });
      });
    });

module.exports = router
