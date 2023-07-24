import createCourse_controller from "./createCourse_controller";
import getcourseByTutorId_controller from "./getcourseByTutorId_controller";
import getAllCourses_controller from "./getAllCourses_controller";
import getCourseById_controller from "./getCourseById_controller";
import publishCourse from "./publishCourse_controlers";
import upDatecourseBasic from "./upDatecourse_controller";

export default (dependencies:any)=>{

    return {
         createCourse_controller:createCourse_controller(dependencies),
         getcourseByTutorId_controller:getcourseByTutorId_controller(dependencies),
         getAllCourses_controller:getAllCourses_controller(dependencies),
         getCourseById_controller:getCourseById_controller(dependencies),
         publishCourse_controlers:publishCourse(dependencies),
         upDatecourseBasic:upDatecourseBasic(dependencies),
    }
}