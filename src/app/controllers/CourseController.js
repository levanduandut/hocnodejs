const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoos")
const { mongooseToObject } = require("../../util/mongoos")
class CourseController {

    // [Get] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render("courses/show", { course: mongooseToObject(course) })
            )
            .catch(next);
        // res.send('Course detail  ' + req.params.slug) ;
    }

    // [Get] /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }
    // [Post] /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {

            });
    }

    // [Get] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course =>
                res.render("courses/edit", { course: mongooseToObject(course) })
            )
            .catch(next);

    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[Delete] /courses/:id
    del(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[Delete] /courses/:id/force
    delforce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[Delete] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] /courses/form-actions
    formActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.coursesIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: "Action is invailid !" })
        }
    }
    //[POST] /courses/form-trash-actions
    formTrashActions(req, res, next) {
        
        switch (req.body.action) {
            case 'restore':
                Course.restore({ _id: { $in: req.body.coursesIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'deleteforce':
                Course.deleteOne({ _id: { $in: req.body.coursesIds }})
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: "Action is invailid !" })
        }
    }
}

module.exports = new CourseController;


// const newController = require('./NewsController')