import { Request, Response } from "express";
import { AnimeInfoType } from "tsukiapp-mal-scrapper/dist/DTO/animeInfo.dto";
import { Anime } from '../lib/keys.js';

class getAnimeController {
  public async getAnime(req: Request, res: Response) {
    const { keyword , type} = req.query
    const response: AnimeInfoType = await Anime.getAnimeInfo(<string>keyword, <string>type);
    return res.status(200).json(response);
  }
}

export const getAnime = new getAnimeController(); 