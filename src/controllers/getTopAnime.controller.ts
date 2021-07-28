import { Request, Response } from 'express';
import { getTopAnimeType } from 'tsukiapp-mal-scrapper/dist/DTO/getTopAnime.dto';
import { Anime } from '../lib/keys.js'

class getTopAnimeController {
  public async getTopAnime(req: Request, res:Response) {
    const response: getTopAnimeType[] = await Anime.getTopAnime();
    return res.status(200).json(response);
  }
}
export const getTopAnimes = new getTopAnimeController();