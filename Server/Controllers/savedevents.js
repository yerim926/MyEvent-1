let express = require('express');
let Event = require("../Models/user");

/* Display Find Events Page */
module.exports.displaySavedEventsPage = (req, res, next) => {
    Event.find(function(err, event){
        if(err)
        {
            return console.error(err);
        }
    /* Render Find Events page */
    res.render('index', { title: 'Saved Events', page: 'savedevents', event: Event });
    });
};