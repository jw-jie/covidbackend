const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
require('dotenv').config();

const { connection} = require('./database/db')
const app = express();

// import routes
const registerRoutes = require('./routes/register');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());// allows all origins

// Limit requests from same API
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use(limiter);

// middleware
app.use('/api', registerRoutes);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`API running on port ${port}`)
})