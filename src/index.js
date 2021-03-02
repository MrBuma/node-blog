const express = require('express');
const path = require('path');
const morgan = require('morgan');
//const bodyParser = require('body-parser')
const app = express();
const exphbs = require('express-handlebars');
//app.use(bodyParser.json());
const port = 3000;
// express static
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
const route = require('./routes');
// khoi tao DB
//const db = require('./config/db');
const db = require('./config/db');
// ket noi toi DB
db.connect();
// Route init
route(app);

// http logger
app.use(morgan('combined'));
// template engines
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.listen(port, () => {
  console.log(`App at http://localhost:${port}`);
});
