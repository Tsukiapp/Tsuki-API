import { Response, Request } from 'express';
import { Anime } from '../lib/keys.js'
import { getTopAnimeType } from 'tsukiapp-mal-scrapper/dist/DTO/getTopAnime.dto';
import { NewDetailsType, NewsPreviewType } from 'tsukiapp-mal-scrapper/dist/DTO/news.dto';
import { SeasonalInfoType } from 'tsukiapp-mal-scrapper/dist/DTO/seasonal.dto';
import { AnimeInfoType } from "tsukiapp-mal-scrapper/dist/DTO/animeInfo.dto";

export default class APIController {

  public async getAnime(req: Request, res: Response) {
    const { keyword , type} = req.query
    const response: AnimeInfoType = await Anime.getAnimeInfo(<string>keyword, <string>type);
    return res.status(200).json(response);
  }
  
  public async getTopAnime(req: Request, res:Response) {
    const response: getTopAnimeType[] = await Anime.getTopAnime();
    return res.status(200).json(response);
  }
  
  public async getAnimeNewsDetails(req: Request, res: Response) {
    const { id } = req.query;
    const response: NewDetailsType = await Anime.getNewsDetails(<string>id);
    return res.status(200).json(response);
  }

  public async getSeasonalInfo(req: Request, res: Response) {
    const response: SeasonalInfoType[] = await Anime.getSeasonalInfo();
    return res.status(200).json(response);
  }

  public async getAnimeNewsPreview(req: Request, res: Response) {
    const response: NewsPreviewType[] = await Anime.getNewsPreview();
    return res.status(200).json(response);
  }

}