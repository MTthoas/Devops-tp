import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  static async getUser(req: Request, res: Response) {
    const user = await UserService.getUser();
    res.json(user);
  }
}
