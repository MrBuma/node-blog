const express = require('express');
const path = require('path');
const morgan = require('morgan');
//const bodyParser = require('body-parser')
const app = express();
const exphbs = require('express-handlebars');
// override methods
const methodOverride = require('method-override');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

const port = 3000;
// express static
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
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
app.engine('hbs', exphbs({ 
        extname: '.hbs', 
        helpers: {
          sum: function (a, b) { return a + b; }
      }
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.listen(port, () => {
  console.log(`App at http://localhost:${port}`);
});
