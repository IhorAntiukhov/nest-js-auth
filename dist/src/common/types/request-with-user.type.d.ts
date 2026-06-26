import { Request } from "messenger-backend/node_modules/@types/express";
import User from "./user.type";
interface RequestWithUser extends Request {
  user: User;
}
export default RequestWithUser;
