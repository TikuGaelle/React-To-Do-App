import React, { useState } from "react";
import AddUser from "./Users/addUser";
import UsersList from "./Users/usersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    console.log(uName, uAge);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
