
import type { ITask } from "@/interfaces/task.interface";
import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    todos: ITask[]
}

const initialState: IInitialState = {
    todos : [
        {
            id: '103',
            title: "Github Push",
            description: "Push The Repo",
            dueDate: "2025-11-23",
            isCompleted: false,
            priority: "High",
        },
        {
            id: '104',
            title: "Recap The Project",
            description: "Do it after completing a repo",
            dueDate: "2025-11-23",
            isCompleted: false,
            priority: "Medium",
        }
    ]
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }
})


export const selectTasks = (state: RootState) => {
    return state.tasks;
}

export default taskSlice.reducer