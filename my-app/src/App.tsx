
import { Link, Outlet } from 'react-router';
import './App.css'
import { Button } from './components/ui/button.tsx'
import { decrement, increment } from './redux/features/counter/counterSlice';
import Tasks from './pages/Tasks.tsx';
import User from './pages/User.tsx';
import { useAppDispatch, useAppSelector } from './redux/hooks.ts';
import { ModeToggle } from './components/ui/mode-toggle.tsx';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // console.log("This is the count: ", count);

  const incrementHandler = (value: number) => {
    dispatch(increment(value));
  }
  const decrementHandler = () => {
    dispatch(decrement());
  }
  const handleBlockButton = () => {
    dispatch({ type: "BLOCK_ME" });
  }

  return (
    <>
      <div className='flex justify-between max-w-[80%] mx-auto'>
        <div>
          <Link to="tasks"><Button>Tasks</Button></Link>
          <Link to="users"><Button>Users</Button></Link>
        </div>
        <ModeToggle></ModeToggle>
      </div>
        {/* <Button onClick={ () => incrementHandler(5) }>Increment By 5</Button>
        <Button onClick={ () => incrementHandler(1) }>Increment</Button>
        <h3>{ count }</h3>
        <Button onClick={decrementHandler}>Decrement</Button>
        <Button onClick={handleBlockButton}>Block Me</Button> */}
        <Outlet></Outlet>
      
    </>
  )
}

export default App
