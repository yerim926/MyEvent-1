let express = require('express');

/* Display Home Page */
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'MyEvent', page: 'home'});
};

/* Display Find Events page */
module.exports.displayFindEvents = (req, res, next) => {
    res.render('index', { title: 'Find Events', page: 'findevents' });
};

/* Display Login Page */
module.exports.displayLoginPage = (req, res, next) => {
    res.render('index', { title: 'Login', page: 'login' });
};