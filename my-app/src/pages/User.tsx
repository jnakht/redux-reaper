import { AddUserDialog } from "@/components/module/user/AssUserDiagram";
import UserCard from "@/components/module/user/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";


export default function User() {
  const users = useAppSelector(selectUsers);
  console.log(users);
  return (
    <div className="mt-15">
        <div className="max-w-[80%] mx-auto flex justify-end">
           <AddUserDialog></AddUserDialog>
        </div>
        <div className="mt-5">
          {
            users.map(user => <UserCard user={user}></UserCard>)
          }
        </div>
    </div>
  );
}