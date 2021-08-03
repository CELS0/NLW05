import { MessagesService } from "../services/messsagesService";
import { Request, Response } from "express"

class MessagesController {
    async create(req: Request, res: Response) {
        const { admin_id, user_id, text } = req.body;
        const messagesService = new MessagesService();
        try {
            const message = await messagesService.create({ admin_id, user_id, text })
            return res.status(200).json(message);
        } catch (err) {
            console.log(err);
            return res.status(200).json({
                message: "Erro controller",
            });
        };
    }
    async showByUser(req: Request, res: Response) {
        const { id } = req.params;
        const messagesService = new MessagesService();
        try {
            const list = await messagesService.listByUser(id);
            return res.status(200).json(list);
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Erro controller",
            });
        }
    }
}

export { MessagesController }