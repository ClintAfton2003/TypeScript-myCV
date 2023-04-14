import { Schema, model } from "mongoose";

interface ISkill {
  skillName: string;
  level: string;
  percent: string;
}

const skillSchema = new Schema<ISkill>({
  skillName: { type: String },
  level: { type: String },
  percent: { type: String },
});

const Skill = model<ISkill>("Skill", skillSchema);
export default Skill;
