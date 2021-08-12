import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { IExpenseItem } from "../context/AppContext";
const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total: number, item: IExpenseItem) => {
    return (total += parseInt(item.cost));
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far :${totalExpenses}</span>
    </div>
  );
};
export default ExpenseTotal;
