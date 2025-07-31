import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard, { type IArgs } from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";




export default function Tasks() {
  
  
    const args : IArgs = {
      mode: "add",
    }

  // const tasks = useAppSelector((state) => state.todo.tasks);
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <h3>This is Tasks component</h3>
      <div className="w-[80%] mx-auto my-10">
        <div className="flex justify-between items-center">
          <h3 className="m-3">Tasks</h3>
          <AddTaskModal args={args}></AddTaskModal>
        </div>
        {
        tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
        }
      </div>
    </div>
  );
}