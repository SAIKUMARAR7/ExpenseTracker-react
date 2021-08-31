import React, { useState } from "react";
import Expense from "./Expense";
import "./Expensess.css";
import ExpenseFilter from "./ExpenseFilter";
const Expensess = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const SelectedYear = (selected) => {
    setFilteredYear(selected);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  return (
    <div>
      <div className="expensess">
        <ExpenseFilter
          selected={FilteredYear}
          onChangeFilteredYear={SelectedYear}
        />
        {FilteredExpenses.length === 0 ? (
          <p>No Expenses</p>
        ) : (
          FilteredExpenses.map((expense) => (
            <Expense
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Expensess;
