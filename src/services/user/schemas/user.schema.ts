import { hashPassword } from "~/utils/server/bcrypt.util";
import { z } from "~/utils/zod.utils";

export const user = z.object({
    id: z.number().optional(),
    nombre: z.string().min(3),
    email: z.string().min(3),
    password: z.string().min(5),
});

export type User = z.infer<typeof user>;
