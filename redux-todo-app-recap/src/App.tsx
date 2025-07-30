
import { Link, Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'

function App() {


  return (
    <>
      <div className='flex gap-4 items-center'>
        <Button>This is App Component</Button>
        <div className='flex gap-2'>
          <Link to="Tasks"><Button>Tasks</Button></Link>
          <Link to="Users"><Button>Users</Button></Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
