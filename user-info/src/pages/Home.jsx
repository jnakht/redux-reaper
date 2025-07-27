import React, { useReducer, useState } from 'react';

const Home = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    // const [userInfo, setUserInfo] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    // })

    // const updateUserInfo = (e) => {
    //     setUserInfo({...userInfo, [e.target.name] : e.target.value});
    // }

    const initialState = {
        name: "",
        email: "",
        phone: "",
    }
    const reducer = (state, action) => {
        switch(action.type) {
            case "FIELD_UPDATE": 
                return {
                    ...state,
                    [action.payload.field]: action.payload.value
                }
            case "RESET": 
                return initialState;
            case "CLEAR": 
                 return {
                    [action.payload.field]: "",
                 }
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
        // console.log({name, email, phone});
        console.log(userInfo);
    }
    const handleReset = () => {
        dispatch({
            type: "RESET"
        })
    }
    const handleClear = (fieldName) => {
        dispatch({
           type: "CLEAR", 
           payload: {
                field: fieldName
           }
        })
    }

    return (
        <div className='flex flex-col justify-center items-center w-[50vw] h-[50vh] border mx-auto my-auto'>
            <h3>Welcome To Our App</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text-lg'>Name</label>
                    <input
                        className='bg-amber-300 ml-4 h-[40px]'
                        type="text"
                        name="name"
                        id="name"
                        value={userInfo.name}
                        onChange={handleOnChange}
                    />
                    <button onClick={() => handleClear('name')} className='btn'>clear</button>
                </div>

                <div  className='my-4'>
                    <label className='text-lg'>Email</label>
                    <input
                        className='bg-amber-300 ml-4 h-[40px]'
                        type="email"
                        name="email"
                        id="email"
                        value={userInfo.email}
                        onChange={handleOnChange}
                    />
                    <button onClick={() => handleClear('email')} className='btn'>clear</button>
                </div>

                <div>
                    <label className='text-lg'>Phone</label>
                    <input
                        className='bg-amber-300 ml-4 h-[40px]'
                        type="text"
                        name="phone"
                        id="phone"
                        value={userInfo.phone}
                        onChange={handleOnChange}
                    />
                    <button onClick={() => handleClear('phone')} className='btn'>clear</button>
                </div>
                <button onClick={handleReset} className='btn'>Reset</button>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Home;