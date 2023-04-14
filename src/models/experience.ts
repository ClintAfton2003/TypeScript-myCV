import { Schema, model } from "mongoose";

interface IExperience {
  job: string;
  company: string;
  startDay: string;
  endDay: string;
  description: string;
}

const experienceSchema = new Schema<IExperience>({
  job: { type: String },
  company: { type: String },
  startDay: { type: String },
  endDay: { type: String },
  description: { type: String },
});

const Experience = model<IExperience>("Experience", experienceSchema);
export default Experience;
