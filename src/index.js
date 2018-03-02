import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import indexRoute from './routes/index';
import searchRoute from './routes/search';
import latestRoute from './routes/latest';

dotenv.config();
mongoose.connect(process.env.MONGODB_URL);

const app = express();
app.use('/', indexRoute);
app.use('/api/imagesearch', searchRoute);
app.use('/api/latest', latestRoute)

app.listen(8080, () => console.log('Running on port 8080'));
