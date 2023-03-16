
import './App.css';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
// const expense = [
//   {
//     id:1,
//     title:'Product 1',
//     price:'$10',
//     description: 'First Product'
//   },
//   {
//     id:1,
//     title:'Product 2',
//     price:'$20',
//     description: 'Second Product'
//   }
// ]
  return (
    <div >
     
        {/* <h1>My Demo Shop</h1> */}
       {/* passing data to the component  */}
       {/* <ExpenseItem title={expense[0].title}  price={expense[0].price} description={expense[0].description}></ExpenseItem>
       <ExpenseItem title={expense[1].title} price={expense[1].price} description={expense[1].description}></ExpenseItem> */}
       <ExpenseItem title = {expenses[0].title}  amount={expenses[0].amount}  date={expenses[0].date}></ExpenseItem>
       <ExpenseItem title = {expenses[1].title}  amount={expenses[1].amount}  date={expenses[1].date}></ExpenseItem>
       <ExpenseItem title = {expenses[2].title}  amount={expenses[2].amount}  date={expenses[2].date}></ExpenseItem>
       <ExpenseItem title = {expenses[3].title}  amount={expenses[3].amount}  date={expenses[3].date}></ExpenseItem>
     
    </div>
  );
}

export default App;
