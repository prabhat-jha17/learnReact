import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountchangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangehandler = (event) => {
    // setEnteredate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountchangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="01-01-2019"
          max="27-09-2023"
          onChange={dateChangehandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
