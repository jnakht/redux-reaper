import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    todo: ITask[]
}

const initialState : IInitialState = {
    todo: [
        {
            id: "343",
            title: "Initialize the counter",
            description: "do it as i said",
            dueDate: "2022-09-23",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "343",
            title: "Initialize the counter",
            description: "do it as i said",
            dueDate: "2022-09-23",
            isCompleted: false,
            priority: "High"
        }
    ]
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

    }
})

export const { } = taskSlice.actions;
export default taskSlice.reducer;