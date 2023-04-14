import { Schema, model } from "mongoose";

interface IAbout {
  image: string;
  name: string;
  job: string;
  age: string;
  email: string;
  skype: string;
  phone: string;
  address: string;
}

const aboutSchema = new Schema<IAbout>({
  image: { type: String },
  name: { type: String },
  job: { type: String },
  age: { type: String },
  email: { type: String },
  skype: { type: String },
  phone: { type: String },
  address: { type: String },
});

const About = model<IAbout>("About", aboutSchema);
export default About;
