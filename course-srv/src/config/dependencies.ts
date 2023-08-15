// import { getAllUser_useCase,createUser_useCase,  getUserBy_Id_useCase,loginUser_usecase } from "../libs/useCase/user";
import { createCourse_useCase,getCourseByTutorId_usecase,getAllCourses_useCase,create_Lessone_useCase,getLessoneByCourseId_UseCase,getCourseById_Usecase,publishCourse_usecase,updateCourse_usecase,createCategory_useCase,editeCategory_usecase,deleteCatogory_useCase,getAllCatogory_useCase} from '../libs/useCase'
import {  courseRepository,lessoneRepository,categoryRepository } from '../libs/app/repository/index'

const useCase:any = {
   createCourse_useCase,
   getCourseByTutorId_usecase,
   getAllCourses_useCase,
   create_Lessone_useCase,
   getLessoneByCourseId_UseCase,
   getCourseById_Usecase,
   publishCourse_usecase,
   updateCourse_usecase,
   createCategory_useCase,
   editeCategory_usecase,
   deleteCatogory_useCase,
   getAllCatogory_useCase
};
const repository:any={courseRepository,lessoneRepository,categoryRepository}


export default {repository,useCase }