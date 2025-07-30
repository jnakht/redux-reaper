import { AddTask } from "@/components/modules/tasks/AddTask";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";





export default function Tasks() {


    const { todos } = useAppSelector(selectTasks);
    console.log("this is tasks: ", todos);

    return (
        <div className="mt-10">
            <div className="max-w-[80%] mx-auto p-4 flex items-center justify-between">
                <h3 className="">Tasks</h3>
                <AddTask></AddTask>
            </div>
            <div className="flex flex-col gap-2">
                {
                    todos.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
}