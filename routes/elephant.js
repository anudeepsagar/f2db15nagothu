// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('elephant', { title: 'Search Results for elephants' });
// });

// module.exports = router;
var express = require('express');
const elephant_controlers= require('../controllers/elephant');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


/* GET costumes */
router.get('/', elephant_controlers.elephant_view_all_Page );
module.exports = router;

/* GET detail costume page */ 
router.get('/detail', elephant_controlers.elephant_view_one_Page); 

/* GET create costume page */
router.get('/create', secured, elephant_controlers.elephant_create_Page);

/* GET update costume page */ 
router.get('/update', secured, elephant_controlers.elephant_update_Page); 

/* GET delete costume page */ 
router.get('/delete', secured, elephant_controlers.elephant_delete_Page); 