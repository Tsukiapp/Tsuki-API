import { Request, Response } from "express";
import { TsearchAnime } from "../types/searchAnime";
// @ts-expect-error
import { getAnimeInfo } from 'tsukiapp-mal-scrapper';

class getAnimeController {
  public async getAnime(req: Request, res: Response) {
    const { keyword, type} = req.query
    const response: TsearchAnime = await getAnimeInfo(keyword, type);
    return res.status(200).json(response);
  }
}

export const searchAnime = new getAnimeController();