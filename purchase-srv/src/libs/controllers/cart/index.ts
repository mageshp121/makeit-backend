import cartController from "./cartController"

export default (dependencies:any)=>{

    return {
         cartController:cartController(dependencies)
    }
}