import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { Trash2 } from "lucide-react";



export default function UserCard({}) {
    const dispatch = useAppDispatch();
  return (
    <div className="mt-4 border-2 rounded-md p-4">
        <div className="flex justify-between">
            {/* <h3>{user.name}</h3> */}
            <Button 
            // onClick={() => dispatch(deleteUser(user.id))} 
            variant="link"><Trash2 className="size-5 text-red-500 p-0"></Trash2></Button>
        </div>
    </div>
  );
}