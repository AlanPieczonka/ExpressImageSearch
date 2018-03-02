import express from 'express';
import dotenv from 'dotenv';
import GoogleImages from 'google-images';

const router = express.Router();

dotenv.config();
const client = new GoogleImages(process.env.ENGINE_ID, process.env.API_KEY);

router.get('/:search', (req, res) => {
  const search = req.params.search;
  client.search(search).then((images) => res.json(images));
});

export default router;