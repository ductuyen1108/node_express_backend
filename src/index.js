import express from 'express';
import route from './routers/index.js';

// Express middleware
import bodyParser from 'body-parser';
import cors from 'cors';

import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const port = process.env.port || 5000;

const URI = 'mongodb://127.0.0.1:27017/Ea_sports_dev';

// Use middleware
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

// Use morgan: HTTP logger
app.use(morgan('combined'));

// Router init
route(app);

// Connect to DB
mongoose.connect(URI)
  .then(() => {
     console.log('Connected to DB');
     app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    });
  })
  .catch((err) => {
    console.error('error', err);
  })



