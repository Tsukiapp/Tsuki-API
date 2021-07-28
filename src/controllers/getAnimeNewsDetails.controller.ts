import { Request, Response } from 'express';
import { Anime } from '../lib/keys.js';
import { NewDetailsType } from 'tsukiapp-mal-scrapper/dist/DTO/news.dto'
class getAnimeNewsDetailController {

  public async getAnimeNewsDetails(req: Request, res: Response) {
    const { id } = req.query;
    const response: NewDetailsType = await Anime.getNewsDetails(<string>id);
    return res.status(200).json(response);
  }
};

export const getAnimeNewsDetails = new getAnimeNewsDetailController();