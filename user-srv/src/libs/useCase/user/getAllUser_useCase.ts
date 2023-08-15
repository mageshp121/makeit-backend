export const getAllUser_useCase = (depentencies: any) => {
  const {
    repository: { userRepository },
  } = depentencies;
  if (!userRepository) throw new Error("repo error");
  const executefunction = async () => {
    const userdata = await userRepository.getAllUser();
    // Separate arrays for 'user' and 'tutor' rolls
    const usersArray = [];
    const tutorsArray = [];
    // Looping through the userdata and separate objects based on the 'roll' field
    for (const obj of userdata) {
      if (obj.roll === "user") {
        usersArray.push(obj);
      } else if (obj.roll === "tutor") {
        tutorsArray.push(obj);
      }
    }
    console.log(usersArray, tutorsArray, "<= usersArray,tutorsArray =>");
    return {
      usersArray,
      tutorsArray,
      userdata,
    };
  };
  return {
    executefunction,
  };
};
