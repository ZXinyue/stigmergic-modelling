var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/signin', function(req, res, next) {
    res.render('signin', { title: 'SingIn' });
});

router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'SingUp' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

router.get('/help', function(req, res, next) {
    res.render('help', { title: 'Help' });
});

router.get('/user', function(req, res, next) {
    res.render('user', { title: 'User' });
});
module.exports = router;
