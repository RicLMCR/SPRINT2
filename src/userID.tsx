import { FC, useState, useEffect } from "react";

const UserID: FC = () => {
  const [user, setUser] = useState("1");

  interface userObjectShape {
    name: string;
    userID: number;
  }

  const userObject: userObjectShape[] = [
    { name: "user1", userID: 1 },
    { name: "user2", userID: 2 },
    { name: "user3", userID: 3 },
  ];

  const [userInfo, setUserInfo] = useState<userObjectShape>();

  useEffect(() => {
    console.log(userInfo);
  });

  //event type React.ChangeEventHandler<HTMLInputElement> but doesnt actually work
  const handleChange = (event: any) => {
    setUser(event.target.value);
    setUserInfo(userObject[event.target.value]);
    // console.log(userInfo);
    // console.log(event.target.value);
    // console.log(userObject[event.target.value])
  };

  return (
    <form className="User">
      <h2>User</h2>
      <select value={user} onChange={handleChange}>
        <option value="0">User 1</option>
        <option value="1">User 2</option>
        <option value="2">User 3</option>
      </select>
    </form>
  );
};

export default UserID;
