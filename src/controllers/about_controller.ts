import { Request, Response } from "express";
import About from "../models/about";

class AboutController {
  async index(req: Request, res: Response) {
    const abouts = await About.find({});
    res.render("components/about", { abouts: abouts[0], title: "About Page", page: req.url });
  }
}

export default new AboutController();
