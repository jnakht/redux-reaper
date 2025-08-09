
import { Link, Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/mode-toggle'

function App() {

   

  return (
    <>
      <div className=''>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 justify-between items-center'>
            <Button>This is App Component</Button>
            <Link to="Tasks"><Button>Tasks</Button></Link>
            <Link to="Users"><Button>Users</Button></Link>
            <Link to="Books"><Button>Books</Button></Link>
          </div>

          <div>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
