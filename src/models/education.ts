import { Schema, model } from "mongoose";

interface IEducation {
  certificate: string;
  school: string;
  startDay: string;
  endDay: string;
  description: string;
}

const educationSchema = new Schema<IEducation>({
  certificate: { type: String },
  school: { type: String },
  startDay: { type: String },
  endDay: { type: String },
  description: { type: String },
});

const Education = model<IEducation>("Education", educationSchema);
export default Education;
