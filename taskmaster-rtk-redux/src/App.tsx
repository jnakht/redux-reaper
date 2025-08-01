
import { Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'
import { ModeToggle } from './components/ui/mode-toggle'


function App() {


  return (
    <>
      <div className='flex justify-between'>
        <div>
          <Button>This is App Component</Button>
          <Button><Link to="Tasks">Tasks</Link></Button>
          <Button><Link to="Users">Users</Link></Button>
        </div>

        <div>
          {/* <ModeToggle></ModeToggle> */}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
