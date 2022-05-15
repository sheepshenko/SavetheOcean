var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('brigadas', { title: 'Save the Ocean - Brigadas' });
});

module.exports = router;
