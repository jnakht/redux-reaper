import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    users: IUser[]
}

const initialState : InitialState = {
    users: [
        {
            id: "105",
            name: "Jisan Khan"
        },
        {
            id: "106",
            name: "Nadim Hasan"
        }
    ]
}

type draftUser = Pick<IUser, "name">;

const createUser = (draftUser : draftUser) : IUser => {
   return {
     ...draftUser,
    id: nanoid(),
   }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action : PayloadAction<IUser>) => {
            const draftUser = createUser(action.payload);
            state.users.push(draftUser);
        },
        deleteUser: (state, action : PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
})

export const selectUsers = (state : RootState) => {
    return state.client.users;
}

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer