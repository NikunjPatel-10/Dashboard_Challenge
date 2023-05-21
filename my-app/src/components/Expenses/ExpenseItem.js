import React from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card';

/**
 * get data from other component via props
 * @returns First exercise
 */
function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,28);
    // // console.log(expenseDate);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67
   

    return (
        <Card className="expense-item">
            {/* <ExpenseDate></ExpenseDate> */}
            {/* oe we can write this way also */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );

    // return (
    //     <article className="product">
    //         <h2>{props.title}</h2>
    //         <p className="price">{props.price}</p>
    //         <p>{props.description}</p>
    //     </article>
    // )

}

export default ExpenseItem