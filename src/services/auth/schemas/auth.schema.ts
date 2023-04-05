import { z } from "~/utils/zod.utils";
import { user } from "~/services/user/schemas/user.schema";

export const authLogin = user.pick({ email: true, password: true });
export type AuthLogin = z.infer<typeof authLogin>;

export const authLogued = user.pick({ id: true, nombre: true, email: true });
export type AuthLogued = z.infer<typeof authLogued>;

export const authRegister = user.pick({
    nombre: true,
    email: true,
    password: true,
});
export type AuthRegister = z.infer<typeof authRegister>;
