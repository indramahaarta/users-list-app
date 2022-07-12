import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [user, ...prevUsersList];
    });
  };

  const deleteUser = (idUser) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== idUser);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList onDeleteUser={deleteUser} users={usersList}></UserList>
    </div>
  );
}

export default App;
