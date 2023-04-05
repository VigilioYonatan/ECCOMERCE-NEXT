import { z } from "~/utils/zod.utils";

export const productSchema = z.object({
    id: z.number().optional(),
    nombre: z.string().min(5),
    descripcion: z.string().min(10),
    precio: z.number(),
    stock: z.number(),
    stars: z.number().gte(0).lte(5),
});

export type Product = z.infer<typeof productSchema>;

export const createProductSchema = productSchema.omit({ id: true });
