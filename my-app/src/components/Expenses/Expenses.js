import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter"
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesList from "./ExpensesList";
function Expenses(props) {
console.log(props.items);
    const [filteredYear, setfilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesChart  expenses={filteredExpenses}/>
                <ExpensesList  items={filteredExpenses}  />
            {/* {
                
                props.items.map(expense =>
                    <ExpenseItem
                    // key help to identify the individual item 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)
            }   */}
            {/* you can do it in this way also
             <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    )
}

export default Expenses