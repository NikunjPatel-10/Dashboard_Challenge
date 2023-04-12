import React, { useState } from 'react'
import './ExpensesForm.css'

const ExpenseForm = (props) => {

    const [enteredtitle, setTitle] = useState('');
    const [enteredamount, setAmount] = useState('');
    const [entereddate, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    /**
     * to submit formData
     * @param {*} event 
     */
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredtitle,
            amount: +enteredamount,
            date: new Date(entereddate)

        }

        /**
         * get data from parent to child using props
         */
        props.onSaveExpenseData(expenseData)

        /**
         * to clear the data when form is submitted
         */
        setTitle('');
        setAmount('');
        setDate('')
        // console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value= {entereddate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm