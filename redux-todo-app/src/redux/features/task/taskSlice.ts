import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    task: ITask[]
}

const initialState: InitialState = {
    task: [
        {
        id: "104",
        title: "Task 1",
        description: "This identifies as task 1 description",
        dueDate: "2025-12-31",
        isCompleted: false,
        priority: "High",
    }
    ]
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
})

export const { } = taskSlice.actions
export default taskSlice.reducer