import type { RootState } from "@/redux/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: '105',
            name: 'Jisan Khan'
        },
        {
            id: '107',
            name: 'Nadim Islam'
        }
    ]
}

const createUser = (userData) => {
    return {
        ...userData,
        id: nanoid()
    }
}

export const userSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const draftUser = createUser(action.payload);
            state.users.push(draftUser);
        }
    }

})

export const selectUsers = (state: RootState) => {
    return state.client.users;
}

export const { addUser } = userSlice.actions 
export default userSlice.reducer