import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleTaskCompletion } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types";
import { SquarePen, Trash2 } from "lucide-react";
import { AddTaskModal } from "./AddTaskModal";
import { selectUsers } from "@/redux/features/user/userSlice";


interface IProps {
    task : ITask
}

export interface IArgs {
  mode: string,
  initialData?: ITask,
}

export default function TaskCard({task} : IProps) {

  const dispatch = useAppDispatch();

  const args : IArgs = {
    mode: "update",
    initialData: task
  }
  const users = useAppSelector(selectUsers);
  const assignedTo = users.find(user => user.id === task.assignedTo);

  return (
    <div className="border-2 flex flex-col p-3 rounded-md">
        {/* upper part of card */}
      <div className=" flex justify-between">
             {/* left part */}
            <div className=" flex-1 flex justify-start gap-3 items-center">
                <div className={cn("size-3 rounded-full", {
                    "bg-green-500": task.priority === "Low",
                    "bg-yellow-500": task.priority === "Medium",
                    "bg-red-500": task.priority === "High"
                })}></div>
                <h1 className={cn("", {
                  'line-through' : task.isCompleted
                })}>{task.title}</h1>
            </div>
             {/* right part */}
            <div className=" flex flex-1 justify-end gap-3 items-center">
                {/* <SquarePen className="size-5" /> */}
                <AddTaskModal args={args}></AddTaskModal>
                <Button onClick={() => dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
                    <Trash2 />
                </Button>
                <Checkbox checked={task.isCompleted === true} onClick={() => dispatch(toggleTaskCompletion(task.id))} className="" />
            </div>
      </div>
         {/* lower part of card */}
      <div>
            <p>Assigned To - { assignedTo?.name ? assignedTo?.name : "N/A"}</p>
            <p>{task.description}</p>
      </div>
    </div>
  );
}