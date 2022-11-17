import Expense from "../components/Expenses/Expense";
import NewExpense from "../components/NewExpense/NewExpense";
import React, { useState } from "react";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  // {
  //   id: "e5",
  //   title: "Add test",
  //   amount: 2711,
  //   date: new Date(2021, 5, 12),
  // },
];

const App = () => {
  const [expenses, setExpense] = useState(DummyExpenses);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
    // console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
};

export default App;
