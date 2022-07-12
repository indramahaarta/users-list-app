import React from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const noData = props.users.length === 0 ? true : false;

  const deleteUser = (event) => {
    event.preventDefault();
    props.onDeleteUser(event.target.id);
  }

  return (
    <Card className={classes.users}>
      {noData && <p>No Data :)</p>}
      {!noData && (
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
                <Button id={user.id} onClick={deleteUser} className={classes["delete-btn"]}>Delete</Button>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default UserList;
