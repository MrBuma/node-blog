const { render } = require('node-sass');
const Course = require('./models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    
    // [GET] /courses/show
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

    //     //[POST] /courses/store
    store(req, res, next){
      //  res.json(req.body);
      req.body.image = `img.youtube.com/vi/${req.body.videoId}/0.jpg`;
       const course = new Course(req.body);
       course.save()
       .then(() => res.redirect('/'))
       .catch( err => 
        { }    
        )
     }

      //[GET] /courses/:id/edit
      edit(req, res, next){
            Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)}))
            .catch(next);
            
          }
    //[PUT] /courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(res.redirect('/me/stored/courses'))
        .catch(next)
       }
        
}

module.exports = new CourseController();