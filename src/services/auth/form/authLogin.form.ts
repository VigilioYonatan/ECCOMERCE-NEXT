import { FormControlsCustom } from "control-react-hook-form";
import { AuthLogin } from "../schemas/auth.schema";
export const authLoginForm: FormControlsCustom<AuthLogin> = {
    email: {
        name: "email",
        type: "email",
        title: "Email",
        placeholder: "Email",
    },
    password: {
        name: "password",
        type: "password",
        title: "Contraseña",
        placeholder: "Contraseña",
    },
};
