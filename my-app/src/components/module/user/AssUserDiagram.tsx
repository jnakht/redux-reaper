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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUserDialog() {
    const [open, setOpen] = useState(false);

    const dispatch = useAppDispatch();

    const form = useForm({
        defaultValues: {
            name: "",
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (value) => {
        // e.preventDefault();
        // console.log(e.target.name);

        console.log(value);
        dispatch(addUser(value));
        
        
        
        setOpen(false);
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                    </DialogHeader>
                    
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} onChange={field.onChange}></Input>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            

                            <DialogFooter className="mt-5">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Add User</Button>
                            </DialogFooter>
                        </form>
                    </Form>

                </DialogContent>
            </form>
        </Dialog>
    )
}
