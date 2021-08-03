import { Request, Response } from "express"
import { UsersService } from "../services/usersService";

class UsersController {
    async create(req: Request, res: Response) {
        const { email } = req.body;
        const usersService = new UsersService();
        try {
            const users = await usersService.create(email);
            return res.status(200).json({ users });

        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "ERRO CONTROLLER 400"
            })
        };
    }

}
export { UsersController }