import { Request, Response } from "express";
import Skill from "../models/skill";

class SkillController {
  async index(req: Request, res: Response) {
    const skills = await Skill.find({});
    res.render("components/skill", { skills: skills, title: "Skill Page", page: req.url });
  }
}

export default new SkillController();
