const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoos")
const { mongooseToObject } = require("../../util/mongoos")
class MeController {

    // [Get] /me/stored/courses
    storedCourses(req, res,next) {
        Course.find({ deletedAt: null})
            .then(courses => res.render('me/stored-courses',
            {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }

}

module.exports = new MeController;


// const newController = require('./NewsController')