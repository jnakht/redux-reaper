import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "moderate" | 'low'
}

const initialState: InitialState = {
    tasks: [
        {
        id: "104",
        title: "Task 1",
        description: "This identifies as task 1 description",
        dueDate: "2025-12-31",
        isCompleted: false,
        priority: "High",
        }
    ],
    filter: "all"
}

export const taskSlice = createSlice({
    name: 'task',
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

export const { } = taskSlice.actions
export default taskSlice.reducer