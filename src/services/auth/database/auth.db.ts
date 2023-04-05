import { UserEntity } from "~/services";
import { verifyPassword } from "~/utils/server/bcrypt.util";
import { AuthLogued } from "../schemas/auth.schema";

export async function checkUserEmailPassword(
    emailInput: string,
    password: string
) {
    const user = await UserEntity.findOne({ where: { email: emailInput } });
    if (!user) {
        return null;
    }
    if (!verifyPassword(user.password, password)) {
        return null;
    }
    const { id, nombre, email } = user;
    return { id, nombre, email };
}

export async function onAuthToDBUser(
    onAuthEmail: string,
    onAuthName: string
): Promise<AuthLogued> {
    const user = await UserEntity.findOne({ where: { email: onAuthEmail } });
    if (user) {
        const { id, nombre, email } = user;
        return { id, nombre, email };
    }

    const newUser = new UserEntity({
        nombre: onAuthName,
        email: onAuthEmail,
        password: "@",
        // rol
    });

    await newUser.save();
    const { id, nombre, email } = newUser;
    return { id, nombre, email };
}
