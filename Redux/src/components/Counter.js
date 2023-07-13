import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)

  const DecrementHandler = () => {
    // dispatch({ type: 'DECREMENT' })
    dispatch(counterAction.decrement())
  }
  const IncrementHandler = () => {
    // dispatch({ type: 'INCREMENT' })
    dispatch(counterAction.increment())
  }
  const IncreaseHandler = () => {
    dispatch(counterAction.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={DecrementHandler}>-</button>
        <button onClick={IncreaseHandler}>Increase By 10</button>
        <button onClick={IncrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
