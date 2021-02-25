const Course = require('./models/Course');

class SiteController {

    home(req, res){
        //res.render('home');
        // res.json({
        //     'name': 'Test thu'
        // });
        Course.find({}, function (err, courses) {
                if(!err){
                    res.json(courses);
                }else {
                    res.status(400).json({err: "Loi"});
                }
          });
    }

    search(req, res){
        res.send('Day la tranh Search');
    }
}

module.exports = new SiteController();