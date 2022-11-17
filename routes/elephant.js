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
/* GET costumes */
router.get('/', elephant_controlers.elephant_view_all_Page );
module.exports = router;

/* GET detail costume page */ 
router.get('/detail', elephant_controlers.elephant_view_one_Page); 

/* GET create costume page */
router.get('/create', elephant_controlers.elephant_create_Page);

/* GET create update page */
router.get('/update', elephant_controlers.elephant_update_Page);