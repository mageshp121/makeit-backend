import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: String,
    createdAt: Date,
  },
  {
    versionKey: false,
  }
);

const category = mongoose.model("categories", categorySchema);
export { category };
