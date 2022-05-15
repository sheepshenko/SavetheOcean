var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('especies', { title: 'Save the Ocean - Especies en peligro' });
});

module.exports = router;
