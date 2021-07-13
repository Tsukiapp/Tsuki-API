import { Router } from 'express';
import { searchAnime } from '../controllers/getAnime.controller.js';
import { getAnimeNewsPreview } from '../controllers/getAnimeNewsPreview.controller.js';
import { getAnimeNewsDetails } from '../controllers/getAnimeNewsDetails.controller.js';

const router: Router = Router();

router.get('/search', await searchAnime.getAnime);
router.get('/news', await getAnimeNewsPreview.getAnimeNewsPreview);
router.get('/news/details', await getAnimeNewsDetails.getAnimeNewsDetails);

export default router;