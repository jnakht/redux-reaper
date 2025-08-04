import { AddTaskDialog } from "@/components/module/tasks/AddTaskDialog";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


export default function Tasks() {


  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="max-w-[80%] flex justify-end mx-auto my-4">
        <AddTaskDialog></AddTaskDialog>
      </div>
      <div>
        {
          tasks.map(task => <TaskCard task={task}></TaskCard>)
        }
      </div>
    </div>
  );
}