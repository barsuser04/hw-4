import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <ul className="ul_ka">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            title={elem.title}
            date={elem.date}
            price={elem.price}
            key={elem.title + new Date().getTime}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
