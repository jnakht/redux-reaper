
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Button } from './components/ui/button.tsx'
import { decrement, increment } from './redux/features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter)
  console.log("This is the count: ", count);

  const incrementHandler = () => {
    dispatch(increment());
  }
  const decrementHandler = () => {
    dispatch(decrement());
  }

  return (
    <>
      <div>
        <Button onClick={incrementHandler}>Increment</Button>
        <h3>{ count }</h3>
        <Button onClick={decrementHandler}>Decrement</Button>
      </div>
    </>
  )
}

export default App
