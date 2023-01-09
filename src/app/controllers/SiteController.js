const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoos")
class SiteController {
    // [Get] /
    home(req, res) {

        Course.find({})
            .then(courses => {
                // courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(error => next(error));


        // res.render('home')
    }

    // [Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;


// const newController = require('./NewsController')