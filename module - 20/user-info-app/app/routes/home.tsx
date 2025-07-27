import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")


  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log({name, email, phone});
  }
  return <>


    <form >
      <p>Name</p>
      <input 
      className="bg-red-100" type="text" name="" id="" 
      value={}/>
      <p>Email</p>
      <input className="bg-red-100" type="email" name="" id="" />
      <p>Phone</p>
      <input className="bg-red-100" type="text" name="" id="" />
      <button>Submit</button>
    </form>

  </>;
}
