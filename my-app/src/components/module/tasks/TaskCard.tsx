import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompletedTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import { AddTaskDialog } from "./AddTaskDialog";
import { selectUsers } from "@/redux/features/user/userSlice";


export default function TaskCard({task}) {
    const dispatch = useAppDispatch();
    const args = {
        mode: "update",
        initialData: task,
    }
    const users = useAppSelector(selectUsers);
    const user = users.find(user => 
        user.id === task.assignedTo
    )
    
  return (
    <div className="border-2 border-green-400 rounded-md max-w-[80%] mx-auto p-4 mb-4">
        {/* upper section on card */}
        <div className="flex justify-between items-center">
            {/* left part */}
            <div className="flex justify-between items-center gap-3">
                <div className={cn("rounded-full size-3", {
                    "bg-green-500" : task.priority === "Low",
                    "bg-yellow-500" : task.priority === "Medium",
                    "bg-red-500" : task.priority === "High",
                })}></div>
                <h3 className={cn({
                    "line-through" :  task.isCompleted
                })}>{task.title}</h3>
            </div>
            {/* right part */}
            <div className="flex justify-between items-center gap-3">
                <Trash2 onClick={() => dispatch(deleteTask(task.id))} className="text-red-500"/>
                <Checkbox checked={task.isCompleted === true} onClick={() => 
                    dispatch(toggleCompletedTask(task.id))
                } />
            </div>
        </div>
        {/* lower section on card */}
        <div className="flex justify-between items-center my-4">
            <h3>{task.description}</h3>
            <h3>Assigned To: {user?.name ? user?.name :  'N/A'}</h3>
            <AddTaskDialog args={args}></AddTaskDialog>
        </div>
    </div>
  );
}