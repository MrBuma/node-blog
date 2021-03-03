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

    //     //[GET] /courses/create
        create(req, res, next){
       res.render("courses/create");
         }

    store(req, res, next){
      //  res.json(req.body);
      req.body.image = `http://img.youtube.com/vi/${req.body.videoId}/0.jpg`;
       const course = new Course(req.body);
       course.save()
       .then(() => res.redirect('/'))
       .catch( err => 
        { }    
        )
     }
}

module.exports = new CourseController();