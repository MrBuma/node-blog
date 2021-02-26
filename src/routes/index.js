
const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./sites');

function route(app){
        
     app.use("/news", newRouter);
     app.use("/courses", coursesRouter);
    // app.get('/', (req, res) => {
    //     //res.send('Hello World!')
    //     res.render('home');
    //   })
    app.use('/',siteRouter);
}

module.exports = route;