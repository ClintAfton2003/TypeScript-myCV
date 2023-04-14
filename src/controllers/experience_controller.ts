import { Request, Response } from "express";
import Experience from "../models/experience";

class ExperienceController {
  async index(req: Request, res: Response) {
    const experiences = await Experience.find({});
    res.render("components/experience", { experiences: experiences, title: "Experience Page", page: req.url });
  }
}

export default new ExperienceController();
