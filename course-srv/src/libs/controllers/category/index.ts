import createcategory_controller from "./createcategory_controller";
import editecategory_controller from "./editecategory_controller";
import deletecategory_controller from "./deletecategory_controller";
import getAllCategory_controller from "./getAllCategory_controller";

export default (dependencies: any) => {
  return {
    createCategory_controller: createcategory_controller(dependencies),
    editecategory_controller: editecategory_controller(dependencies),
    deleteCategory_controller: deletecategory_controller(dependencies),
    getAllCategory_controller: getAllCategory_controller(dependencies),
  };
};
