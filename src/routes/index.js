
const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./sites');
const meRouter = require('./me');

function route(app){
        
     app.use("/news", newRouter);
     app.use("/courses", coursesRouter);
     app.use("/me", meRouter);
    // app.get('/', (req, res) => {
    //     //res.send('Hello World!')
    //     res.render('home');
    //   })
    app.use('/',siteRouter);
}

module.exports = route;