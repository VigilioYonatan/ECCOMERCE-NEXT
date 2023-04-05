import { Sequelize } from "sequelize-typescript";
import { UserEntity } from "./user/database/entities/user.entity";
import { ProductEntity } from "./product/database/entities/product.entity";

export const sequelize = new Sequelize({
    database: "eccomerce",
    dialect: "mysql",
    username: "root",
    password: "dokixd123",
});

sequelize.addModels([UserEntity, ProductEntity]);

export { UserEntity, ProductEntity };

export async function connectDB() {
    try {
        await sequelize.authenticate({});
        // await sequelize.sync({ alter: true });
        console.log("Conectado a la base de datos");
    } catch (err) {
        console.log("Error en la conexion de base de datos", err);
    }
}
connectDB();
