import express from 'express';
import searchRoute from './routes/search';
import path from 'path';
const app = express();

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/imagesearch', searchRoute);

app.listen(8080, () => console.log('Running on port 8080'));
