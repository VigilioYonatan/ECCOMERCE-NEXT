import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const passHash = bcrypt.hashSync(password, salt);
    return passHash;
}

export function verifyPassword(hash: string, password: string) {
    return bcrypt.compareSync(password, hash);
}
