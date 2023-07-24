

export const getUserBy_Id_useCase = (dependecies:any) =>{
          const {repository :{ userRepository }} = dependecies;
          if(!userRepository) throw new Error("repo error")
        const executefunction=async(id:string)=>{
                const userById = await userRepository.getUserById(id);
                console.log(userById,'buyyyyyyyy');
                if(!userById) return {status:false}
                return userById  
        }
   return {
      executefunction
   }
}