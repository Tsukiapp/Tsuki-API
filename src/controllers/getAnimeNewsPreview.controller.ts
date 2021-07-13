import { Request, Response } from 'express';
import { TgetNews } from '../types/getNews';
//@ts-expect-error
import { getNewsPreview } from 'tsukiapp-mal-scrapper';

class getAnimeNewsPreviewController {
  public async getAnimeNewsPreview(req: Request, res: Response) {
    const response: TgetNews[] = await getNewsPreview();
    return res.status(200).json(response)
  }
}

export const getAnimeNewsPreview = new getAnimeNewsPreviewController()