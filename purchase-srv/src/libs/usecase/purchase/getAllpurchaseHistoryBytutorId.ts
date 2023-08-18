



export const getPurhcaseHistoryByTutor_useCase = (dependencies:any) =>{
    const {
        repository: { purchaseRespository },
      } = dependencies;
 const exicutefunction = async (tutorId:string)=>{
    const purcchaseResbyuserId = await purchaseRespository.getAllpurchaseHistoryByTutoId(tutorId);
    console.log(purcchaseResbyuserId,"This history at get purhaese useCase");
    return purcchaseResbyuserId

}
return {exicutefunction}

}