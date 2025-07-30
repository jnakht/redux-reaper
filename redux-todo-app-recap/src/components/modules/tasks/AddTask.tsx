
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"
export function AddTask() {


    const form = useForm();

    const onSubmit = (value) => {
        console.log(value);
    }

    return (

        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>

                    </DialogHeader>
                    <DialogDescription className="hidden">Fill The Form</DialogDescription>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormDescription>Title</FormDescription>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input {...field} value={field.value || ""} />
                                        </FormControl>

                                    </FormItem>
                                )}
                            />
                            <FormDescription>Description</FormDescription>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input {...field} value={field.value || ""} />
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
