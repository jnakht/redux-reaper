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
        title: "Initialize Github",
        description: "Initialize the github repo when make any new repo",
        dueDate: "2025-12-31",
        isCompleted: false,
        priority: "High",
        },
        {
        id: "105",
        title: "Make the dishes done",
        description: "Do it, or it will be clean by the maid",
        dueDate: "2025-12-31",
        isCompleted: false,
        priority: "Medium",
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