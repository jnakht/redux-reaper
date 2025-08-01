import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard, { type IArgs } from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";





export default function Tasks() {


  // const args: IArgs = {
  //   mode: "add",
  // }


  // const dispatch = useAppDispatch();
  // // const tasks = useAppSelector((state) => state.todo.tasks);
  // const tasks = useAppSelector(selectTasks);
  // const filter = useAppSelector(selectFilter);

  // console.log(tasks);
  // console.log(filter);


  // api query
  const { data, isError, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true
  });
  console.log({ data, isError, isLoading });


  if (isLoading) {
    return <div className="flex justify-center items-center text-5xl">
      <p>Loading...</p>
    </div>
  }

  return (
    <div>
      <h3>This is Tasks component</h3>
      <div className="w-[80%] mx-auto my-10">

        <div className="flex justify-between items-center">
          <h3 className="m-3">Tasks</h3>
          <div className="flex gap-4 items-center">
            <Tabs defaultValue="All">
              <TabsList>
                <TabsTrigger 
                      // onClick={() => 
                      // dispatch(updateFilter('All'))} 
                      value="All">All
                </TabsTrigger>
                <TabsTrigger 
                      // onClick={() => 
                      // dispatch(updateFilter('Low'))} 
                      value="Low">Low
                </TabsTrigger>
                <TabsTrigger 
                      // onClick={() => 
                      // dispatch(updateFilter('Medium'))} 
                      value="Medium">Medium
                </TabsTrigger>
                <TabsTrigger 
                      // onClick={() => 
                      // dispatch(updateFilter('High'))} 

                      value="High">High
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <AddTaskModal></AddTaskModal>
          </div>
        </div>
        {
          !isLoading && data.tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
        }
      </div>
    </div>
  );
}