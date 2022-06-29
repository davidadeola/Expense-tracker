import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Apple watch",
      amount: 650,
      date: new Date(2022, 1, 10),
      currency: '$',
    },
    {
      id: "e2",
      title: "Macbook Pro",
      amount: 1550,
      date: new Date(2022, 3, 9),
      currency: '$',
    },
    {
      id: "e3",
      title: "Ipad Pro",
      amount: 800,
      date: new Date(2020, 6, 8),
      currency: '$',
    },
    {
      id: "e4",
      title: "LG Ultra wide Desktop",
      amount: 1400,
      date: new Date(2019, 2, 7),
      currency: '$',
    },
  ];

  const  App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    );
  }

export default App;
