import express from 'express';
import SearchTerm from '../models/SearchTerm';
import paginate from '../helpers/paginate';

const LATEST_SEARCH_OFFSET = 10;

const router = express.Router();
router.use('/', (req, res) => {
  SearchTerm.find({}).then(result => result.reverse())
                     .then(reversed => paginate(reversed, LATEST_SEARCH_OFFSET))
                     .then(latest => res.json(latest))
                     .catch(err => res.json({error: err}));
})

export default router;
