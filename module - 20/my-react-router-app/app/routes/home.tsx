import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";



export default function Home() {

  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const asyncIncrement = () => {
    setTimeout(() => {
      // setCounter(counter + 1); // wrong method
      setCounter((prev) => prev + 1); // correct method
    }, 5000)
  }


  return <>
  
  <button onClick={increment} className="bg-amber-50">Increment</button>
  <button onClick={asyncIncrement} className="btn">Async Increment</button>
  <div>
    <span>{counter}</span>
  </div>
  
  </>;
}
