const { render } = require('node-sass');
const Course = require('./models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
        .then(course => {
            //res.json(course);
            res.render('courses/show', { course: mongooseToObject(course) });
        })
        .catch(next)
    }

     create(req, res, next){
       res.render("courses/create");
    }

    store(req, res, next){
        res.json(req.body);
        //res.send('Hello the world');
     }
}

module.exports = new CourseController();