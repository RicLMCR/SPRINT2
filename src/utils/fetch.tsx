//fetch all users
export const listUsers = async (setUserList:any) => {
  try {
    console.log("Listuser start");
    const response = await fetch(`http://localhost:5001/user`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    setUserList(data)
    return data;

  } catch (error) {
    console.log(`listUser error: ${error}`);
  }
};
    // const stringData = JSON.stringify(data);
    // console.log(stringData[0])
    // return stringData;