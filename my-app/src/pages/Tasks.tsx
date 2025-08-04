import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


export default function Tasks() {


  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <h3>This is Tasks component</h3>
      <div>
        {
          tasks.map(task => <TaskCard task={task}></TaskCard>)
        }
      </div>
    </div>
  );
}