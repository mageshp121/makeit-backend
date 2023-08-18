import mongoose from "mongoose";

const lessoneSchema = new mongoose.Schema(
  {
    lessoneS3UrlKey: String,
    lessoneTitle: String,
    lessoneOrder: Number,
    tutorId: String,
    courseId: String,
  },
  {
    versionKey: false,
  }
);
const lessone = mongoose.model("lesones", lessoneSchema);
export { lessone };
