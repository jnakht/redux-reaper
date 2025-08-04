import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | "Low";
}

const initialState : IInitialState = {
    tasks: [
        {
            id: "343",
            title: "Initialize the counter",
            description: "do it as i said",
            dueDate: "2022-09-23",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "344",
            title: "Initialize the counter",
            description: "do it as i said",
            dueDate: "2022-09-23",
            isCompleted: false,
            priority: "High"
        }
    ],
    filter: "All",
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

    }
})

export const selectTasks = (state : RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}

export const { } = taskSlice.actions;
export default taskSlice.reducer;