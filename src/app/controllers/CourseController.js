const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoos")
class CourseController {

    // [Get] /courses/:slug
    show(req, res) {
        res.send('Course detail  ' + req.params.slug) ;
    }
}

module.exports = new CourseController;


// const newController = require('./NewsController')