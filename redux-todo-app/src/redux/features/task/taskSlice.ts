import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | 'Low'
}

const initialState: InitialState = {
    tasks: [],
    filter: "All"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">;

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
        },
        toggleTaskCompletion: (state, action : PayloadAction<string>) => {
            state.tasks.map(task => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action : PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action : PayloadAction<ITask>) => {
            const index = state.tasks.findIndex(item => item.id === action.payload.id);
            state.tasks[index] = action.payload;
        },
        updateFilter: (state, action : PayloadAction<"All" | "Low" | "Medium" | "High">) => {
            state.filter = action.payload;
        }
    }
})

export const selectTasks = (state : RootState) => {
    const filter = state.todo.filter;
    // return state.todo.tasks; // all
    if (filter === 'Low') {
        return state.todo.tasks.filter(task => task.priority === 'Low');
    } else if (filter === "Medium") {
        return state.todo.tasks.filter(task => task.priority === 'Medium');
    } else if (filter === 'High') {
        return state.todo.tasks.filter(task => task.priority === "High");
    } else {
        return state.todo.tasks;
    }
}
export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}

export const { addTask, toggleTaskCompletion, deleteTask, updateTask, updateFilter } = taskSlice.actions
export default taskSlice.reducer