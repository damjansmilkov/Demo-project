import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [fullBox, setFullBox] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setFullBox(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.target.reset();
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setFullBox(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!fullBox ? 'invalid': 'valid'}`}>
        <label >Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{
          //   borderColor: !fullBox ? "red" : "black",
          //   background: !fullBox ? "salmon" : "transparent",
          // }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
