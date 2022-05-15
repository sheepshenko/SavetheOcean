var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('playas', { title: 'Save the Ocean - Playas de México' });
});

module.exports = router;
