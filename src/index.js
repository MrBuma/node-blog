const express = require('express');
const path = require('path');
var morgan = require('morgan');
const app = express();
const exphbs = require('express-handlebars');
const port = 4000;
// express static
app.use(express.static(path.join(__dirname, 'public')));

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
app.set('views', path.join(__dirname, 'resource/views'));

app.listen(port, () => {
  console.log(`at http://localhost:${port}`);
});
