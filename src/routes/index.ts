import { Router } from "express";
import about_controller from "../controllers/about_controller";
import skill_controller from "../controllers/skill_controller";
import experience_controller from "../controllers/experience_controller";
import education_controller from "../controllers/education_controller";
import contact_controller from "../controllers/contact_controller";
import About from "../models/about";
import Skill from "../models/skill";
import Experience from "../models/experience";
import Education from "../models/education";

const router = Router();

router.get("/", async (req, res) => {
  const abouts = await About.find({});
  const skills = await Skill.find({});
  const experiences = await Experience.find({});
  const educations = await Education.find({});
  res.render("index", { title: "Home Page", page: req.url, abouts: abouts[0], skills: skills, experiences: experiences, educations: educations });
});

router.get("/about", about_controller.index);
router.get("/skill", skill_controller.index);
router.get("/experience", experience_controller.index);
router.get("/education", education_controller.index);
router.get("/contact", contact_controller.index);

export default router;
