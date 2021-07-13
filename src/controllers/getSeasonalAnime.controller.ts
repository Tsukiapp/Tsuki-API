import { Request, Response } from 'express';
//@ts-expect-error
import { getSeasonalInfo } from 'tsukiapp-mal-scrapper';
import { TgetSeasonalInfo } from '../types/getSeasonalInfo'

class getSeasonalInfoController {
  public async getSeasonalInfo(req: Request, res: Response) {
    const response: TgetSeasonalInfo[] = await getSeasonalInfo();
    return res.json(response)
  }
}

export const getSeason = new getSeasonalInfoController();