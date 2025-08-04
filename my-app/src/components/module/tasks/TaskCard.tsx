import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

export default function TaskCard({task}) {
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
                <h3>{task.title}</h3>
            </div>
            {/* right part */}
            <div className="flex justify-between items-center gap-3">
                <Trash2 />
                <Checkbox />
            </div>
        </div>
        {/* lower section on card */}
        <div>
            <h3>{task.description}</h3>
        </div>
    </div>
  );
}