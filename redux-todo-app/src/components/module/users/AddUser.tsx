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
import { addUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import type { IUser } from "@/types"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUser() {

    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit : SubmitHandler<FieldValues> = (value) => {
        console.log(value);
        dispatch(addUser(value as IUser));
    }

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>

                    </DialogHeader>


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>

                                            <Input {...field}></Input>

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
