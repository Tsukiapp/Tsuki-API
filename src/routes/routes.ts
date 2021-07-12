import { Router } from 'express';
import { searchAnime } from '../controllers/getAnime.controller.js';
const router: Router = Router();

router.get('/', await searchAnime.getAnime);
export default router;