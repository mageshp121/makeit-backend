



export const getPurhcaseHistoryByUserId_useCase = (dependencies:any) =>{
    const {
        repository: { purchaseRespository },
      } = dependencies;
 const exicutefunction = async (userId:string)=>{
    const purcchaseResbyuserId = await purchaseRespository.getAllpurchaseHistoryByUserId(userId);
    console.log(purcchaseResbyuserId,"This history at get purhaese useCase");
    
    return purcchaseResbyuserId

}
return {exicutefunction}

}