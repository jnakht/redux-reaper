import { AddTaskDialog } from "@/components/module/tasks/AddTaskDialog";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function Tasks() {


  const { data, error, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true, 
    refetchOnMountOrArgChange: true, 
    refetchOnReconnect: true
  });

  // const tasks = useAppSelector(selectTasks);
  const args = {
    mode: "add",
  }

  console.log({data, error, isLoading});

  const dispatch = useAppDispatch();

  const onUpdateFilter = (filter) => {
    dispatch(updateFilter(filter))
  }


  if (isLoading) {
    return <>
        <div className="h-[100vh] w-[100vw] flex justify-center items-center text-5xl">
          <h3>Loading...</h3>
        </div>
    </>
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
          data?.tasks.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
        }
      </div>
    </div>
  );
}