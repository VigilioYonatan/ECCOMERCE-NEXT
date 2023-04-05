import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../schemas/user.schema";

@Table({ tableName: "users" })
export class UserEntity extends Model<User> implements User {
    @Column({ type: DataType.STRING })
    nombre: string;

    @Column({ type: DataType.STRING, unique: true })
    email: string;

    @Column({ type: DataType.STRING })
    password: string;
}
