var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Save the Ocean - Login' });
});

router.post('/', function(req,res, next){
    var email = req.body.correo;
    var pass = req.body.pass;
    res.render('login', { title: 'Save the Ocean - Login', mail: email });
    console.log(email);
});

module.exports = router;
