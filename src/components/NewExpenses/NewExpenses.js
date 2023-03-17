import React from "react";
import './NewExpenses.css'
import ExpenseForm from "../NewExpenses/ExpensesForm";
const NewExpenses = () => {
    return (
        <div className="new-expense">
           <ExpenseForm/>
        </div>
    )
}

export default NewExpenses