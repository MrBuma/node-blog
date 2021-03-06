const { render } = require('node-sass');
const Course = require('./models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    
    // [GET] me/stored/courses/
    storedCourses(req, res, next){
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
        .then(([courses, deleteCounts]) => {
            res.render('me/stored-courses', { 
                deleteCounts,
                courses: multipleMongooseToObject(courses) });
        })

        .catch(next)

    }
    
    // [GET] me/strash/courses/
    trashCourses(req, res, next){
        Course.findDeleted({})
        .then(courses => {
             //res.json(course);
             res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) });
         })
         .catch(next)
    }
}

module.exports = new MeController();