const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoos")
const { mongooseToObject } = require("../../util/mongoos")
class MeController {

    
    // [Get] /me/stored/courses
    storedCourses(req, res, next) {
        let cf = Course.find({})

        if(req.query.hasOwnProperty('_sort')){
            cf = cf.sort({
                [req.query.column]: req.query.type
            })
        }
        Promise.all([cf, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/stored-courses',
                {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                }),
            ).catch(next)

    }

    // [Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses',
                {
                    courses: mutipleMongooseToObject(courses)
                }))
            .catch(next)
    }



}

module.exports = new MeController;


// const newController = require('./NewsController')