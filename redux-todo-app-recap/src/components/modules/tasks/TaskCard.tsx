import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/interfaces/task.interface";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";


interface IProps {
    task: ITask
}

export default function TaskCard({task} : IProps) {
  return (
    <div>
        {/* whole card */}
        <div className="flex flex-col max-w-[80%] border-2 mx-auto p-4 rounded-md">
            {/* upper part */}
            <div className="flex justify-between">
                {/* left part */}
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-red-500": task.priority === "High",
                        "bg-yellow-500": task.priority === "Medium",
                        "bg-green-500": task.priority === "Low"
                    })}></div>
                    <h3>{task.title}</h3>
                </div>
                {/* right part */}
                <div className="flex justify-between gap-2 items-center">
                   <Button variant="link"> <Trash2 className="text-red-500 p-0"/></Button>
                    <Checkbox />
                </div>
            </div>
            {/* lower part */}
            <div>
                <h3>{task.description}</h3>
            </div>
        </div>
    </div>
  );
}