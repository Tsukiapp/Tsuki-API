import { Request, Response } from 'express';
//@ts-expect-error
import { getTopAnime } from 'tsukiapp-mal-scrapper';

class getTopAnimeController {
  public async getTopAnime(req: Request, res:Response) {
    const response = await getTopAnime();
    return res.status(200).json(response)
  }
}
export const getTopAnimes = new getTopAnimeController();