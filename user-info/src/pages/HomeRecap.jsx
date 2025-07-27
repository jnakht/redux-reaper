import React, { useState } from 'react';

const HomeRecap = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const updateUserInfo = (inputField, value) => {
        setUserInfo({...userInfo, [inputField]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        className='bg-amber-400' 
                        type="text" 
                        name="name" 
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => {updateUserInfo(e.target.name, e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        className='bg-amber-400' 
                        type="email" 
                        name="email" 
                        id="email"
                        value={userInfo.email}
                        onChange={(e) => {updateUserInfo(e.target.name, e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        className='bg-amber-400' 
                        type="text" 
                        name="phone" 
                        id="phone"  
                        value={userInfo.phone}
                        onChange={(e) => {updateUserInfo(e.target.name, e.target.value)}}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HomeRecap;