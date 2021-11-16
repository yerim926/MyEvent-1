let express = require('express');
let Event = require("../Models/event");

/* Display Find Events Page */
module.exports.displaySavedEventsPage = (req, res, next) => {
    Event.find(function(err, event){
        if(err)
        {
            return console.error(err);
        }
    /* Render Find Events page */
    res.render('index', { title: 'Find Events', page: 'findevents', event: Event });
    });
};