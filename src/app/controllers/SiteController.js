const { render } = require('node-sass');
const Course = require('./models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    home(req, res, next){
        //res.render('home');
        
        // Course.find({}, function (err, courses) {
        //         if(!err){
        //             res.json(courses);
        //         }else {
        //             res.status(400).json({err: "Loi"});
        //         }
        //   });
        Course.find({})
        .then(courses => {
            res.render('home', { 
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
        //error => next(error)
    }

    search(req, res){
        res.send('Day la tranh Search');
    }
}

module.exports = new SiteController();