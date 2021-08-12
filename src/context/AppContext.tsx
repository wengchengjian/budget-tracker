import React, { useReducer, Dispatch } from "react";

const AppReducer = (
  state: IAppContext,
  action: { type: string; payload: IExpenseItem }
) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expenses) => {
          console.log(expenses.id, action.payload.id);
          if (expenses.id !== action.payload.id) {
            return true;
          } else {
            return false;
          }
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: "40" },
    { id: 13, name: "holiday", cost: "400" },
    { id: 14, name: "car service", cost: "50" },
  ],
};

type IExpenseItem = {
  id: number;
  name: string;
  cost: string;
};
type actionType = {
  type: string;
  payload: IExpenseItem[];
};
type IAppContext = {
  budget: number;
  expenses: IExpenseItem[];
};

const AppContext = React.createContext<any>(null);

export const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export type { IExpenseItem };
export default AppContext;
