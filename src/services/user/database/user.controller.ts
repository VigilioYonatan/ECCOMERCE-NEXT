import { UserEntity } from "~/services";

class UserController {
    async index() {
        const users = await UserEntity.findAll();
        return users;
    }
}

export const userController = new UserController();
