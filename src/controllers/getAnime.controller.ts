import { Request, Response } from "express";
import { TsearchAnime } from "../interfaces/searchAnime";
// @ts-expect-error
import { getAnimeInfo } from 'tsukiapp-mal-scrapper';

class getAnimeController {
  public async getAnime(req: Request, res: Response) {
    const { keyword, type} = req.query
    const response: TsearchAnime = await getAnimeInfo(keyword, type);
    console.log(keyword);
    res.send(response)
  }
}

export const searchAnime = new getAnimeController();