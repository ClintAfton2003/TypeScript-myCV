import { Request, Response } from "express";
import About from "../models/about";

class ContactController {
  async index(req: Request, res: Response) {
    const abouts = await About.find({});
    res.render("components/contact", { abouts: abouts[0], title: "Contact Page", page: req.url });
  }
}

export default new ContactController();
