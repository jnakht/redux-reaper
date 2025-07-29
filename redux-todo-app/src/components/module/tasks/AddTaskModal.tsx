import { Button } from "@/components/ui/button"
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
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

export function AddTaskModal() {

  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            
          </DialogHeader>
         
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
            
            <DialogDescription>Title</DialogDescription>
            <FormField
              control={form.control}
              name="title"
              render={({field}) => (
                
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} value={field.value || ""}/>
                    </FormControl>
                  </FormItem>
               
              )}
            />
            <DialogDescription>Description</DialogDescription>
            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Textarea {...field} value={field.value || ""}/>
                    </FormControl>
                  </FormItem>
               
              )}
            />

            
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
             </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
