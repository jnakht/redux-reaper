import { AddTaskDialog } from "@/components/module/tasks/AddTaskDialog";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function Tasks() {


  const tasks = useAppSelector(selectTasks);
  const args = {
    mode: "add",
  }

  const dispatch = useAppDispatch();

  const onUpdateFilter = (filter) => {
    dispatch(updateFilter(filter))
  }
  return (
    <div>
      <div className="max-w-[80%] flex justify-end mx-auto my-4">
        <Tabs defaultValue="All" className="w-[400px]">
          <TabsList>
            <TabsTrigger onClick={() =>
              onUpdateFilter('All')
            } value="All">All</TabsTrigger>
            <TabsTrigger onClick={() =>
              onUpdateFilter('Low')
            } value="Low">Low</TabsTrigger>
            <TabsTrigger onClick={() =>
              onUpdateFilter('Medium')
            } value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() =>
              onUpdateFilter('High')
            } value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskDialog args={args}></AddTaskDialog>
      </div>
      <div>
        {
          tasks.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
        }
      </div>
    </div>
  );
}