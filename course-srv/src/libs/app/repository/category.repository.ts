import { Types } from "mongoose";
import { category } from "../database/schema/category.schema";

export default {
  addCategory: async (data: any) => {
    console.log(data, "datattatatat");

    const categoryData = {
      category: data.category,
      createdAt: data.createdAt,
    };
    const categoryRes = await category.create(categoryData);
    return categoryRes;
  },
  editeCategory: async (data: any) => {
    const categoryRes = await category.updateOne(
      { _id: new Types.ObjectId(data._id) },
      {
        $set: { category: data.category },
      }
    );
    return categoryRes;
  },
  getAllCategory: async () => {
    const categoryRes = await category.find({});
    return categoryRes;
  },
  deleteCategory: async (categoryName: string) => {
    const categoryRes = await category.deleteOne({
      category: categoryName.toString(),
    });
    return categoryRes;
  },
  getCategoryByName: async (categoryName: string) => {
    const categoryRes = await category.findOne({ category: categoryName });
    return categoryRes;
  },
};
