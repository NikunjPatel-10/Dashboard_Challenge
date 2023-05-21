import React, { useState } from 'react';
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses';
// import './components/ExpenseItem'

import Expenses from './components/Expenses/Expenses';

function App() {

  const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const[expenses,SetExpenses] = useState(Dummy_Expenses)
  const addExpenseHandler = (expense) => {
    console.log('in app js' , expense);
    // expenses.push(expense)
    SetExpenses((previousExpenses)=>{
      return [expense,...previousExpenses]
    });
    console.log("result", expenses);
  }
 
  return (
    <div >
      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* <h1>My Demo Shop</h1> */}
      {/* passing data to the component  */}
      {/* <ExpenseItem title={expense[0].title}  price={expense[0].price} description={expense[0].description}></ExpenseItem>
       <ExpenseItem title={expense[1].title} price={expense[1].price} description={expense[1].description}></ExpenseItem> */}
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
