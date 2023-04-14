import { Request, Response } from "express";
import Education from "../models/education";

class EducationController {
  async index(req: Request, res: Response) {
    const educations = await Education.find({});
    res.render("components/education", { educations: educations, tilte: "Education Page", page: req.url });
  }
}

export default new EducationController();
