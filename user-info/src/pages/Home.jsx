import React, { useState } from 'react';

const Home = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const updateUserInfo = (inputField, value) => {
        setUserInfo({...userInfo, [inputField] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({name, email, phone});
        console.log(userInfo);
    }

    return (
        <div>
            <h3>Welcome To Our App</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text-lg'>Name</label>
                    <input
                        className='bg-amber-300'
                        type="text"
                        name="name"
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => updateUserInfo("name", e.target.value)}
                    />
                </div>

                <div>
                    <label className='text-lg'>Email</label>
                    <input
                        className='bg-amber-300'
                        type="email"
                        name="email"
                        id="email"
                        value={userInfo.email}
                        onChange={(e) => updateUserInfo("email", e.target.value)}
                    />
                </div>

                <div>
                    <label className='text-lg'>Phone</label>
                    <input
                        className='bg-amber-300'
                        type="text"
                        name="phone"
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => updateUserInfo("phone", e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Home;