import { MetaData } from "@/interfaces/metaData.interface";
import { User } from "@/interfaces/user.interface";
import { UserService } from "@/services/user.service";
import EditUser from "@/components/EditUser/EditUser";

const EditUserPage = async () => {
  const users: User[] = await UserService.getUsers();
  return <EditUser users={users} />;
}

export default EditUserPage;
