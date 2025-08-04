import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



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

const createTask = (draftTask) => {
    const id = nanoid();
    return {
        ...draftTask,
        id: id,
        isCompleted: false
    }
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<ITask>) => {
            const draftTask = createTask(action.payload);
            state.tasks.push(draftTask);
        }
    }
})

export const selectTasks = (state : RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}

export const { addTask, } = taskSlice.actions;
export default taskSlice.reducer;