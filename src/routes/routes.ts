import { Router } from 'express';
import { getAnime } from '../controllers/getAnime.controller.js';
import { getAnimeNewsPreview } from '../controllers/getAnimeNewsPreview.controller.js';
import { getAnimeNewsDetails } from '../controllers/getAnimeNewsDetails.controller.js';
import { getSeason } from '../controllers/getSeasonalAnime.controller.js'
import { getTopAnimes } from '../controllers/getTopAnime.controller.js';

const router: Router = Router();

router.get('/search', await getAnime.getAnime);
router.get('/news', await getAnimeNewsPreview.getAnimeNewsPreview);
router.get('/news/details', await getAnimeNewsDetails.getAnimeNewsDetails);
router.get('/season', await getSeason.getSeasonalInfo);
router.get('/top', await getTopAnimes.getTopAnime);

export default router;