import { Get, HttpCode, createHandler } from "next-api-decorators";
import { ProductEntity, UserEntity, sequelize } from "~/services";
import { productSeed } from "~/services/product/database/product.seed";
import { userSeed } from "~/services/user/database/user.seed";
class SeedController {
    @Get()
    @HttpCode(200)
    async seed() {
        await sequelize.sync({ force: true });
        await Promise.all([
            ProductEntity.bulkCreate(productSeed),
            UserEntity.bulkCreate(userSeed),
        ]);
        return { success: true, msg: "Seed Executed" };
    }
}
export default createHandler(SeedController);
