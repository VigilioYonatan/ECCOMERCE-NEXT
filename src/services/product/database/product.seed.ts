import { arrayFrom } from "~/utils/helpers";
import { faker } from "@faker-js/faker";
import { Product } from "../schemas/product.schema";

export const productSeed: Product[] = arrayFrom(100).map(() => ({
    nombre: faker.commerce.productName(),
    descripcion: faker.commerce.productDescription(),
    precio: Number(faker.commerce.price(1, 100, 2)),
    stock: Number(faker.random.numeric(2)),
    stars: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));
