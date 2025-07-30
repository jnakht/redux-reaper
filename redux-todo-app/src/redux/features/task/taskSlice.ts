import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "moderate" | 'low'
}

const initialState: InitialState = {
    tasks: [],
    filter: "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" >;

const createTask = (draftTask : DraftTask) : ITask => {
    const taskData = {
        id: nanoid(),
        isCompleted: false,
        ...draftTask
    }
    return taskData;
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<DraftTask>) => {
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id: id,
            //     isCompleted: false
            // }
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state : RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}

export const { addTask } = taskSlice.actions
export default taskSlice.reducer