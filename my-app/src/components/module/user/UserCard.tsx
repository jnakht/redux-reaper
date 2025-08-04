import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Trash2 } from "lucide-react";

export default function UserCard({user}) {
    const dispatch = useAppDispatch();
  return (
    <div className="flex border-2 max-w-[80%] mx-auto justify-between h-[60px] p-4">
      
      <h3>{user.name}</h3>
      <Trash2 onClick={() => dispatch(deleteUser(user.id))} className="text-red-500" />
    </div>
  );
}