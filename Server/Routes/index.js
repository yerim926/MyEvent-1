let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyEvent', page: 'home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'MyEvent', page: 'home' });
});

/* GET Find Events page. */
router.get('/find-events', function(req, res, next) {
  res.render('index', { title: 'Find Events', page: 'findevents' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login' });
});

module.exports = router;
