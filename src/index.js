import express from 'express';
import path from 'path';
import GoogleImages from 'google-images';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const client = new GoogleImages(process.env.ENGINE_ID, process.env.API_KEY);


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/images', (req,res) => {
  client.search('Gojira').then((images) => res.json(images));
});

app.listen(8080, () => console.log('Running on port 8080'));
