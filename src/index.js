import express from 'express';
import route from './routers/index.js';
import dotenv from 'dotenv';

dotenv.config();
// Express middleware
import bodyParser from 'body-parser';
import cors from 'cors';

import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

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
     app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`)
    });
  })
  .catch((err) => {
    console.error('error', err);
  })



