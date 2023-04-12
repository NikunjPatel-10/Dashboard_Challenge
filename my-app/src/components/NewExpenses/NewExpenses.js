import React from "react";
import './NewExpenses.css'
import ExpenseForm from "../NewExpenses/ExpensesForm";

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
       const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
       }
    //    console.log(expenseData);
    /**
     * get data from the add.js file using prop
     */
   props.onAddExpense(expenseData)
    // console.log( props.onAddExpense(expenseData));
    }
    return (
        <div className="new-expense">
            {/* send data from parent to child */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpenses