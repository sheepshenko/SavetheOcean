var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro-brigada', { title: 'Save the Ocean - Registra tu Brigada' });
});

module.exports = router;
