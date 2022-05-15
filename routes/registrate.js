var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registrate', { title: 'Save the Ocean - Registrate' });
});

module.exports = router;
