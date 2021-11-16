let express = require('express');
let router = express.Router();

let eventsController = require('../Controllers/savedevents');

/* GET Find Events page */
router.get('/', eventsController.displayFindEventsPage);

module.exports = router;