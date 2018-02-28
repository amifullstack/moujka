const express = require('express')
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const expressSession = require('express-session')({
  secret: 'you never guessed this lol',
  resave: false,
  saveUninitialized: false,
})

// Models
const User = require('./models/User');


const PORT = 3000

// import routes
const index = require('./routes/index');
// api
const api = require('./routes/api/index');
const user = require('./routes/api/users');
// Auth
const authenticate = require('./routes/api/authentication');


const app = express();

// connect to db
mongoose.connect('mongodb://localhost:27017/appdb')
.then(() => console.log(`Connection success`))
.catch((err) => console.log(err));

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
// app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/json'}));

// Webpack Server
if (process.env.NODE_ENV !== 'production') {
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  status: {
    color: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));
}

app.use(expressSession);
// passport
app.use(passport.initialize());
app.use(passport.session());

// dev:view, deploy:public
app.use(express.static(path.join(__dirname, 'views')));

app.use('/api', api);
app.use('/api/users', user);
app.use('/api/authentication', authenticate);
app.use('/*', index)

// Configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// server
app.listen(PORT, () => {
  console.log(`We're live on PORT: ${PORT}`)
})