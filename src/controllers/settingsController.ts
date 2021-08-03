import { Request, Response } from "express"
import { SettingService } from "../services/settingService";

class SettingsController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body;
        const settingsService = new SettingService();
        try{
           const settings = await settingsService.create({ chat, username });
         return res.status(200).json(settings);
        }catch(err){
            console.log(err);
            return res.status(200).json({
                message: "ERRO CONTROLLER 400",
            })
        };
}
async findByUsername(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingService();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingService();

    const settings = await settingsService.update(username, chat);
    return response.json(settings);
  }
}
export { SettingsController };