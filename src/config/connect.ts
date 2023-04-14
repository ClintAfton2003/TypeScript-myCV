import mongoose from "mongoose";

export function connect() {
  mongoose.connect("mongodb+srv://cvwithtypescript:exercise@excercise-3.qunygom.mongodb.net/ClintAfton").then(() => console.log("Connected!"));
}
