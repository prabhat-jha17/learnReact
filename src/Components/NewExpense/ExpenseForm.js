import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountchangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangehandler = (event) => {
    setEnteredate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  //********concept of shared handler function*******
  //   const inputChangeHaqndler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "amount") {
  //       setEnteredAmount(value);
  //     } else {
  //       setEnteredate(value);
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault(); // this will prevent the refresh of page on submit click
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input
          type="text"
          onChange={(event) => {
            inputChangeHaqndler("title", event.target.value);
          }}
        /> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="27-09-2023"
            value={enteredDate}
            onChange={dateChangehandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
