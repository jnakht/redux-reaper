import React, { useReducer, useState } from 'react';

const HomeRecap = () => {
    // const [userInfo, setUserInfo] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    // })


    // const updateUserInfo = (e) => {
    //     setUserInfo({...userInfo, [e.target.name]: e.target.value});
    // }

    const initialState = {
        name : "",
        email: "",
        phone: "",
    }
    const [userInfo, dispatch] = useReducer(reducer, initialState);
    
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
                        onChange={updateUserInfo}
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
                        onChange={updateUserInfo}
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
                        onChange={updateUserInfo}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HomeRecap;