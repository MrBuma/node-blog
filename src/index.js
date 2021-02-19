const express = require('express');
const path = require('path');
var morgan = require('morgan') ;
const app = express();
const exphbs  = require('express-handlebars');
const port = 4000;
// http logger
app.use(morgan('combined'));
// template engines
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});