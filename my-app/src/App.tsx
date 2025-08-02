
import './App.css'
import { Button } from './components/ui/button.tsx'
import { decrement, increment } from './redux/features/counter/counterSlice';

import { useAppDispatch, useAppSelector } from './redux/hooks.ts';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // console.log("This is the count: ", count);

  const incrementHandler = (value : number) => {
    dispatch(increment(value));
  }
  const decrementHandler = () => {
    dispatch(decrement());
  }
  const handleBlockButton = () => {
    dispatch({type: "BLOCK_ME"});
  }

  return (
    <>
      <div>
        <Button onClick={ () => incrementHandler(5) }>Increment By 5</Button>
        <Button onClick={ () => incrementHandler(1) }>Increment</Button>
        <h3>{ count }</h3>
        <Button onClick={decrementHandler}>Decrement</Button>
        <Button onClick={handleBlockButton}>Block Me</Button>
      </div>
    </>
  )
}

export default App
