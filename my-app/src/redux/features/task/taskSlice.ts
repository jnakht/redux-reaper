import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



interface IInitialState {
    tasks: ITask[],
    filter: "All" | "High" | "Medium" | "Low";
}

const initialState: IInitialState = {
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



type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;
export type UpdateTask = Pick<ITask, "id" | "title" | "description" | "priority" | "dueDate">

const createTask = (draftTask: DraftTask): ITask => {
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
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const draftTask = createTask(action.payload);
            state.tasks.push(draftTask);
        },
        toggleCompletedTask: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload ?
                    task.isCompleted = !task.isCompleted
                    :
                    task
            )
        },
        deleteTask: (state, action : PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => 
                task.id !== action.payload
            )
        },
        updateTask: (state, action : PayloadAction<UpdateTask>) => {
            const index = state.tasks.findIndex(task => 
                task.id === action.payload.id
            )
            state.tasks[index] = {
                ...state.tasks[index],
                ...action.payload
            }  
        },
        updateFilter: (state, action : PayloadAction<"All" | "Low" | "Medium" | "High">) => {
            state.filter = action.payload;
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export const {
     addTask, 
     toggleCompletedTask, 
     deleteTask, 
     updateTask,
     updateFilter,
} = taskSlice.actions;
export default taskSlice.reducer;