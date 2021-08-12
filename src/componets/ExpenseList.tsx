import { useContext } from "react";

import ExpenseItem from "./ExpenseItem";
import AppContext from "../context/AppContext";
import { IExpenseItem } from "../context/AppContext";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <>
      <ul className="list-group">
        {expenses.map((item: IExpenseItem) => {
          return (
            <ExpenseItem
              id={item.id}
              name={item.name}
              cost={item.cost}
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};
export default ExpenseList;
