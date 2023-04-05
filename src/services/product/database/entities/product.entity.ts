import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Product } from "../../schemas/product.schema";

@Table({ tableName: "products" })
export class ProductEntity extends Model<Product> implements Product {
    @Column({ type: DataType.STRING(150), allowNull: false, unique: true })
    nombre: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    descripcion: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    precio: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    stock: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 5,
        validate: { min: 0, max: 5 },
        allowNull: false,
    })
    stars: number;
}
