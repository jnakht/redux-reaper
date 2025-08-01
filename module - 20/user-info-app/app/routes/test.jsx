import { useState } from "react";

export default function test() {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: ""
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        const draftUserInfo = {
            ...userInfo,
            [e.target.name]: e.target.value
        }
        setUserInfo(draftUserInfo);
        console.log("Value: ", userInfo);
    }
  return (
    <div>
      <h3>This is test component</h3>



      <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={userInfo.name}
                    onChange={handleSubmit} />
            </div>
          
            <div>
                <label htmlFor="email">email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={userInfo.email}
                    onChange={handleSubmit} />
            </div>
              <div>
                <label htmlFor="phone">phone</label>
                <input 
                    type="text" 
                    name="phone" 
                    id="phone"
                    value={userInfo.phone}
                    onChange={handleSubmit} />
            </div>
            <button>Sumit</button>
      </form>
    </div>
  );
}