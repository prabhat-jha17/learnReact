import React, { useState } from "react";
import Card from "../CommonUI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    if (filteredYear === "all") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
  // //it is valid to write jsx code before return statment.
  // let expenseContent = <p>Result not found for this year.</p>;
  // if (filteredExpense.length > 0) {
  //   expenseContent = filteredExpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       title={expense.title}
  //       amount={expense.amount}
  //     />
  //   ));
  // }
  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList item={filteredExpense} />
    </Card>
  );
};
export default Expenses;
