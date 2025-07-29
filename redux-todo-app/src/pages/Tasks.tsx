import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


export default function Tasks() {

  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <h3>This is Tasks component</h3>
      <div className="w-[80%] mx-auto my-10">
        <h3 className="m-3">Tasks</h3>
        {
        tasks.map(task => <TaskCard task={task}></TaskCard>)
        }
      </div>
    </div>
  );
}