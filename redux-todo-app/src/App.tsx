
import { Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'


function App() {
 

  return (
    <>
      <Button>This is App Component</Button>
      <Button><Link to="Tasks">Tasks</Link></Button>
      <Button><Link to="Users">Users</Link></Button>
      <Outlet></Outlet>
    </>
  )
}

export default App
