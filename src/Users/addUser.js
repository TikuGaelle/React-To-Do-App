import { useState } from "react";
import Card from "../UI/card";
import ErrorModal from "../UI/errorModal";
import classes from "./adduser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    // The plus sign is added infront of enteredUserAge to force it's conversion to a number, since it's a string.
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age greater than 0",
      });
      return;
    }
    console.log("age:", enteredUserAge, "name", enteredUserName);
    props.onAddUser(enteredUserName, enteredUserAge);
    // setEnteredUserAge("");
    // setEnteredUserAge("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {console.log("hello")}
        <form onSubmit={(e) => addUserHandler(e)}>
          <label htmlFor="userName"> Username: </label>
          <input
            type="text"
            id="userName"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          ></input>

          <label htmlFor="age"> Age: </label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            onChange={ageChangeHandler}
          ></input>

          <button type="submit"> Add User</button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
