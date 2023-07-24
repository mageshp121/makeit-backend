

export const getAllUser_useCase = (depentencies:any)=>{
     const {repository:{userRepository}}=depentencies
    if(!userRepository) throw new Error("repo error")
    const executefunction = () => {
        return userRepository.getAllUser()
    }
    
    return {
        executefunction
    }
}