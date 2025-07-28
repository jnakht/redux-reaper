
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hooks';


function App() {
  

  const dispatch = useAppDispatch();
  // const counter = useSelector((state : RootState) => state.counter);
  const { count } = useAppSelector((state) => state.counter);
  console.log(count);
  // const dispatch = useDispatch();
  

  const handleIncrement = (value: number) => {
    dispatch(increment(value));
  }
  const handleDecrement = (value: number) => {
    dispatch(decrement(value));
  }

  return (
    <>
      <h3>Welcome to Redux Counter</h3>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <div>{count}</div>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
    </>
  )
}

export default App
