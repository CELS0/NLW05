import { Router } from "express"
import { MessagesController } from "./controllers/messagesController";
import { SettingsController } from "./controllers/settingsController";
import { UsersController } from "./controllers/usersController";

const routes = Router();

const settingscontroller = new SettingsController();
const usersscontroller = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingscontroller.create);
routes.get("/settings/:username", settingscontroller.findByUsername);
routes.put("/settings/:username", settingscontroller.update);

routes.post("/users", usersscontroller.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)



export { routes } 