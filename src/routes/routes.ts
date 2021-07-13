import { Router } from 'express';
import { searchAnime } from '../controllers/getAnime.controller.js';
import { getAnimeNewsPreview } from '../controllers/getAnimeNewsPreview.js';
const router: Router = Router();

router.get('/search', await searchAnime.getAnime);
router.get('/news', await getAnimeNewsPreview.getAnimeNewsPreview);
export default router;