import { createHandler } from "next-api-decorators";
import { ProductController } from "~/services/product/database/product.controller";

export default createHandler(ProductController);
