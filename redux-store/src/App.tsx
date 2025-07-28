import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h3>Counter With Redux</h3>
        <button>Increment</button>
        <div>0</div>
        <button>Decrement</button>
    </div>
  )
}

export default App
