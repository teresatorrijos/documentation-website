const express      = require('express');
const path         = require('path');
const layouts      = require('express-ejs-layouts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.title = 'Documentation Website';

app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

const index = require('./routes/index');
app.use('/', index);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
