'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sass = require('node-sass');
const fs = require('fs');
const API = require('./lib/routes');
const CSS = require('clean-css');
const minifier = new CSS();
const uglifier = require('./util/uglify');
const helmet = require('helmet');

uglifier.start();

const app = express();
app.use(helmet());

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: 'assets/views/layouts',
  partialsDir: 'assets/views/partials'
}));

app.set('view engine', '.hbs');
app.set('views', 'assets/views');

app.use(express.static(`${__dirname}/public`));
app.use('/assets', express.static(`${__dirname}/dist/assets`));

app.use('/demo', express.static(`${__dirname}/dist`));
app.use('/demo/dashboard', express.static(`${__dirname}/dist`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

API(app);

app.listen(3000, () => {
  console.log('listening on port 3000');
});

sass.render({
  file:  './assets/styles/styles.scss',
  sourceMap: true,
  outFile: './public/styles.css'
}, (err, res) => {
  if (err) {
    console.log(err);
  }

  const css = minifier.minify(res.css.toString('utf8'));

  fs.writeFile('./public/styles.css', css.styles, (err) => {
    if (!err) {
      // file written on disk
    }
  });
})
;
