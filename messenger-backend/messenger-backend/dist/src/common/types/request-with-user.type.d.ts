import { Request } from 'express';
import User from "./user.type";
interface RequestWithUser extends Request {
    user: User;
}
export default RequestWithUser;
