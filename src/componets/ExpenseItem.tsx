import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import AppContext from "../context/AppContext";
type IExpenseItemProps = {
  id: number;
  name: string;
  cost: string;
};

const ExpenseItem = ({ id, name, cost }: IExpenseItemProps) => {
  const { dispatch, expenses } = useContext(AppContext);
  const handleDeleteExpense = () => {
    console.log(expenses);

    dispatch({
      type: "DELETE_EXPENSE",
      payload: { id: id },
    });
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {name}
        <div>
          <span className="badge badge-primary badge-pill mr-3">${cost}</span>
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </div>
      </li>
    </>
  );
};
export default ExpenseItem;
