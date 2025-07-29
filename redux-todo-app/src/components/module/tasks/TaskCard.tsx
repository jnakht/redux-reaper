import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps {
    task : ITask
}

export default function TaskCard({task} : IProps) {
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
                <h1>{task.title}</h1>
            </div>
             {/* right part */}
            <div className=" flex flex-1 justify-end gap-3 items-center">
                <Button variant="link" className="p-0 text-red-500">
                    <Trash2 />
                </Button>
                <Checkbox className="" />
            </div>
      </div>
         {/* lower part of card */}
      <div>
            <p>{task.description}</p>
      </div>
    </div>
  );
}