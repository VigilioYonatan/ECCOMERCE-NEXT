import { NextFunction, createMiddlewareDecorator } from "next-api-decorators";
import { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";

export const ValidatorMiddleware = <T extends z.ZodRawShape>(
    schema: z.ZodObject<T>
) =>
    createMiddlewareDecorator(
        (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
            let body: z.infer<typeof schema> = req.body;

            const shemaZod = schema.safeParse(body);

            if (!shemaZod.success) {
                console.log(shemaZod.error.issues);

                const maped = shemaZod.error.issues.map((prod) => ({
                    message: prod.message,
                    path: prod.path[0],
                }));
                return res.status(400).json({ success: false, ...maped[0] });
            }
            req.body = shemaZod.data;
            next();
        }
    )();
