import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";





export default function Tasks() {


    const { todos } = useAppSelector(selectTasks);
    console.log("this is tasks: ", todos);

    return (
        <div className="mt-10">
            <h3 className="max-w-[80%] mx-auto p-4">Tasks</h3>
            <div className="flex flex-col gap-2">
                {
                    todos.map(task => <TaskCard task={task}></TaskCard>)
                }
            </div>
        </div>
    );
}