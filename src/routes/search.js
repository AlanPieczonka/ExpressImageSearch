import express from 'express';
import dotenv from 'dotenv';
import GoogleImages from 'google-images';
import mongoose from 'mongoose';

import SearchTerm from '../models/SearchTerm';
import  paginate  from '../helpers/paginate';

dotenv.config();
const client = new GoogleImages(process.env.ENGINE_ID, process.env.API_KEY);

const router = express.Router();
router.get('/:search', async (req, res) => {
  const { search } = req.params,
        { offset } = req.query;

  const newSearchTerm = new SearchTerm({
    searchTerm: search
  });
  newSearchTerm.save().then(response => console.log(response))
                      .catch(error => console.log(error));

  const images = await _getImages(search, offset);
  res.json(images)
});

const _getImages = async (search, offset) => {
  let result;
  try {
    result = await client.search(search)
  } catch(err){
    return result = { error: 'There has been an error!' };
  }
  return paginate(result, offset);
}

export default router;