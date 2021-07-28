import { Router } from 'express';
import APIController from '../controllers/Controller.js';

const router: Router = Router();
const Controller = new APIController();

router.get('/search', await Controller.getAnime );
router.get('/news', await Controller.getAnimeNewsPreview );
router.get('/news/details', await Controller.getAnimeNewsDetails);
router.get('/season', await Controller.getSeasonalInfo);
router.get('/top', await Controller.getTopAnime );

export default router;