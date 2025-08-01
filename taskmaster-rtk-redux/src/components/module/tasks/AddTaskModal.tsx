import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { ITask } from "@/types"
import { format } from "date-fns"

import { CalendarIcon } from "lucide-react"

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import type { IArgs } from "./TaskCard"

import { useState } from "react"
import { useCreateTaskMutation } from "@/redux/api/baseApi"

export function AddTaskModal() {
  const [open, setOpen] = useState(false);

  // const form = useForm({
  //   defaultValues: args?.initialData ?? {
  //     title: "",
  //     description: "",
  //     priority: "",
  //     dueDate: "",
  //   }
  // });
  const dispatch = useAppDispatch();
  // const users = useAppSelector(selectUsers);
  const form = useForm();

  

  const [createTask, {data,  isLoading, isError }] = useCreateTaskMutation();
  console.log("outside the onsubmit function", data);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const taskData = {
      ...data,
      isCompleted: false,
    }
    const res = await createTask(taskData).unwrap();
    console.log("inside on submit: ", res);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          {/* <Button>{args.mode === 'add' ? 'Add Task' : 'Update Task'}</Button> */}
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            {/* <DialogTitle>{args.mode === 'add' ? 'Add Task' : 'Update Task'}</DialogTitle> */}
            <DialogTitle>Add Task</DialogTitle>

          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              {/* <DialogDescription>Title</DialogDescription> */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (

                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      {/* <Input {...field} value={field.value || ""} /> */}
                      <Input {...field} />
                    </FormControl>
                  </FormItem>

                )}
              />
              {/* <DialogDescription>Description</DialogDescription> */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (

                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      {/* <Textarea {...field} value={field.value || ""} /> */}
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>

                )}
              />


              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                    <Select onValueChange={field.onChange} >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />


              {/* <FormField
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned To</FormLabel> */}
                    {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                    {/* <Select onValueChange={field.onChange} >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent> */}
                        {/* {
                          users.map(user => <SelectItem value={user.id}>{user.name}</SelectItem>)
                        } */}
                      {/* </SelectContent>
                    </Select>
                  </FormItem>
                )}
              /> */}


              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                              // field.value
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          // disabled={(date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    
                  </FormItem>
                )}
              />


              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                {/* <Button type="submit">{args.mode === 'add' ? 'Add Task' : 'Update Task'}</Button> */}
                <Button type="submit">Add Task</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
