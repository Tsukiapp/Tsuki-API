import { Request, Response } from 'express';
import { Anime } from '../lib/keys.js';
import { NewsPreviewType } from 'tsukiapp-mal-scrapper/dist/DTO/news.dto';

class getAnimeNewsPreviewController {
  public async getAnimeNewsPreview(req: Request, res: Response) {
    const response: NewsPreviewType[] = await Anime.getNewsPreview();
    return res.status(200).json(response);
  }
}

export const getAnimeNewsPreview = new getAnimeNewsPreviewController();