
import type { ITask } from "@/interfaces/task.interface";
import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    tasks: ITask[]
}

const initialState: IInitialState = {
    tasks : [
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

export default taskSlice.reducer