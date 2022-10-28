/// @ts-nocheck

import { useEffect, useState } from "react";
import { listUsers } from "../utils/fetch";

const UserList = () => {
  //state to store list of users
  const [userList, setUserList] = useState([]);

  //capture selected user id on butto press
  const selectUser = (e) => {
    // storeUser(e);
    console.log(`user is ${e}`);
  };

  //render user list at start
  useEffect(() => {
    console.log("useffect working");
    listUsers(setUserList);
  }, []);

  return (
    <div>
      <h1>User List Here</h1>
      {userList.map((user) => (
        <div key={user._id}>
          <button
            className="deskButton"
            type="button"
            onClick={() => {
              selectUser(user._id);
            }}
          >
            {user.username}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
