const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const routes = require('./routes');

const database = require('./config/database/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const port = 3000;

database.connect();

app.engine(
  'hbs',
  engine({
    extname: '.hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'pages'));

routes(app);

// override with POST having ?_method=DELETE

app.listen(port, () => {
  console.log('App listening at port 3000');
});
