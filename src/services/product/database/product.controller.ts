import { Body, Get, HttpCode, Param, Post } from "next-api-decorators";
import { ProductEntity } from "~/services";
import { ValidatorMiddleware } from "~/utils/server/middlewares/validation.middleware";
import { createProductSchema } from "../schemas/product.schema";

export class ProductController {
    @Get()
    @HttpCode(200)
    async index() {
        const products = await ProductEntity.findAll();
        return { success: true, data: products };
    }

    @Get("/:id")
    @HttpCode(200)
    async show(@Param("id") id: string) {
        const product = await ProductEntity.findByPk(id);
        return { success: true, product };
    }

    @Post()
    @HttpCode(200)
    @ValidatorMiddleware(createProductSchema)
    async create(@Body() body: string) {
        console.log(body);
    }
}
