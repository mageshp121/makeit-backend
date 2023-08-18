import mongoose from "mongoose";

export const extractAllcourseIds = (purchaseData: any) => {
  let courseid = [];
  for (const purchase of purchaseData) {
    const courseDetails = purchase.courseDetails;
    for (let i = 0; i < courseDetails.length; i++) {
      courseid.push(courseDetails[i].courseId);
    }
  }
//   const objectIds = courseid.map((id) => new mongoose.Types.ObjectId(id));
//   console.log(objectIds);
  return courseid;
};
