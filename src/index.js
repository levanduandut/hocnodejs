const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require("path")
const methodOverride = require('method-override')

const app = express();
const port = 3000

const route = require("./routes/index")
const db = require('./config/db')

db.connect();


app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({
  extended: true
}
))
app.use(express.json())
//Http logger
app.use(morgan('combined'))

//Template enginer
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+ b
  }
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));

//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})