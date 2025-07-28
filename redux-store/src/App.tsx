
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hooks';


function App() {
  
  // const dispatch = useDispatch(); 
  const dispatch = useAppDispatch();



  // const counter = useSelector((state) => state.counter);
  // console.log(counter); //obj ,, to get => counter.count
  // const { count } = useSelector((state : RootState) => state.counter)
  const { count } = useAppSelector((state) => state.counter)


  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
        <h3>Counter With Redux</h3>
        <button onClick={handleIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
