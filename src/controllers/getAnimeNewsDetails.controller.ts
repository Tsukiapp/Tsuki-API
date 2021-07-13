import { Request, Response } from 'express';
//@ts-expect-error
import { getNewsDetails,getNewsPreview  } from 'tsukiapp-mal-scrapper';

class getAnimeNewsDetailController {
  public async getAnimeNewsDetails(req: Request, res: Response) {
    const { id } = req.query;
    const response = await getNewsDetails(getNewsPreview, id);
    return res.status(200).json(response);
  }
};

export const getAnimeNewsDetails = new getAnimeNewsDetailController();