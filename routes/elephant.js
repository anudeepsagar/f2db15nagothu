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