import express from 'express';
import dotenv from 'dotenv';
import GoogleImages from 'google-images';

const router = express.Router();

dotenv.config();
const client = new GoogleImages(process.env.ENGINE_ID, process.env.API_KEY);

router.get('/:search', async (req, res) => {
  const { search } = req.params,
        { offset } = req.query;

  const images = await _getImages(search, offset);
  res.json(images)
});


const _getImages = async(search, offset) => {
  let result;
  try {
    result = await client.search(search)
  } catch(err){
    return result = { error: 'There has been an error!' };
  }
  return _paginate(result, offset);
}

const _paginate = (arr, offset) => {
  return arr.slice(0, offset)
}

export default router;