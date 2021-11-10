let express = require('express');
let router = express.Router();

let indexController = require('../Controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/* GET Find Events page. */
router.get('/find-events', indexController.displayFindEvents);

/* GET Login page. */
router.get('/login', indexController.displayLoginPage);

module.exports = router;
