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
    const reducer = (state, action) => {
        switch(action.type) {
            case "FIELD_UPDATE": 
                return {
                    ...state,
                    [action.payload.field]: action.payload.value
                };
            default: 
                return state;
        }
    }
    const [userInfo, dispatch] = useReducer(reducer, initialState);
    
    console.log(userInfo);
    const handleOnChange = (e) => {
        dispatch({
            type: "FIELD_UPDATE",
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        })
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HomeRecap;