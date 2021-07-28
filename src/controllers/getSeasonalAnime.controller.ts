import { Request, Response } from 'express';
import { SeasonalInfoType } from 'tsukiapp-mal-scrapper/dist/DTO/seasonal.dto';
import { Anime } from '../lib/keys.js';

class getSeasonalInfoController {
  public async getSeasonalInfo(req: Request, res: Response) {
    const response: SeasonalInfoType[] = await Anime.getSeasonalInfo();
    return res.status(200).json(response);
  }
}

export const getSeason = new getSeasonalInfoController();