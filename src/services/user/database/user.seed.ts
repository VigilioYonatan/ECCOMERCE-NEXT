import { arrayFrom } from "~/utils/helpers";
import { faker } from "@faker-js/faker";
import { User } from "../schemas/user.schema";
import { hashPassword } from "~/utils/server/bcrypt.util";

export const userSeed: User[] = arrayFrom(5).map(() => ({
    nombre: faker.name.firstName(),
    email: faker.internet.email(),
    password: hashPassword("123456"),
}));
