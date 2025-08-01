import { AddUser } from "@/components/module/users/AddUser";
import UserCard from "@/components/module/users/UserCard";
import { Button } from "@/components/ui/button";

import { useAppSelector } from "@/redux/hooks";

export default function Users() {


  // const users = useAppSelector(selectUsers);
  // console.log(users);

  return (
    <div className="max-w-[80%] mx-auto">
      <div className="flex justify-between items-center mt-10">
          <h3>This is Users component</h3>
          <AddUser></AddUser>
      </div>
      {/* users card container  */}
      <div >
          {/* {
            users.map(user => <UserCard user={user}></UserCard>)
          } */}
      </div>
    </div>
  );
}