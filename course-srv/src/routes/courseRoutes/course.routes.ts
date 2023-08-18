import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {
  courseController,
  lessoneControler,
  categoryController,
} from "../../libs/controllers";
import multer from "multer";
import { jwtauthentication } from "@makeitcmn/comon";
// import publishCourse_controlers from '../../libs/controllers/course/publishCourse_controlers'
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default (dependencies: any) => {
  const secret: any = {
    refreshToken: process.env.REFRESH_JWT_SECRETEKEY,
    accessToken: process.env.ACCESS_JWT_SECRETEKEY,
  };
  const router = express.Router();
  // Course contrpller
  const {
    createCourse_controller,
    getcourseByTutorId_controller,
    getAllCourses_controller,
    getCourseById_controller,
    publishCourse_controlers,
    upDatecourseBasic,
  } = courseController(dependencies);

  
  // lesson controller
  const { createLessone_controller, getLessoneBycourseId_controller } =
    lessoneControler(dependencies);


  // category controller
  const {
    createCategory_controller,
    editecategory_controller,
    deleteCategory_controller,
    getAllCategory_controller,
  } = categoryController(dependencies);


  // get methode releted to course
  router.get(
    "/courses/:id",
    jwtauthentication(secret),
    getcourseByTutorId_controller
  );

  router.get("/courses", getAllCourses_controller);
  router.get("/course/:id", getCourseById_controller);
  router.get("/category", getAllCategory_controller);

  // get methode related to lessone
  router.get("/lessones/:id", getLessoneBycourseId_controller);
  // post methodes related to course
  router.post(
    "/courses",
    jwtauthentication(secret),
    upload.single("ThumbnailImage"),
    createCourse_controller
  );
  router.post("/category", createCategory_controller);

  // post methodes related to lessones
  router.post(
    "/lessones",
    jwtauthentication(secret),
    upload.single("lessoneContent"),
    createLessone_controller
  );


  // patch methode related course
  router.patch("/pub/:id", jwtauthentication(secret), publishCourse_controlers);
  router.patch("/category", editecategory_controller);


  // put methodes
  router.put(
    "/updatecourse",
    jwtauthentication(secret),
    upload.single("ThumbnailImage"),
    upDatecourseBasic
  );


  // deletmethode
  router.delete("/deletcategory/:categoryId",deleteCategory_controller);
  return router;
};
