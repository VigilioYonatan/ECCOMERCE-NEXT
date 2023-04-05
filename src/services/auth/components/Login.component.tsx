import { useForm } from "react-hook-form";
import { authLoginForm } from "../form/authLogin.form";
import { AuthLogin, authLogin } from "../schemas/auth.schema";
import { HrExtra } from "~/components/extras/Hr.extra";
import { TerciaryButton } from "~/components/buttons/Terciary.button";
import { AuthFormcontrolComponent } from "./AuthFormcontrol.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContextState } from "../context/auth.context";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import cookie from "js-cookie";

type LoginComponentProps = {
    changeModeRegister: () => void;
};
export function LoginComponent({ changeModeRegister }: LoginComponentProps) {
    const { control, handleSubmit, resetField, getValues, setValue } =
        useForm<AuthLogin>({
            resolver: zodResolver(authLogin),
        });

    useEffect(() => {
        const data: AuthLogin | null =
            JSON.parse((cookie.get("remember-auth") as string) || "{}") || null;
        if (data) {
            setValue("email", data.email);
        }
    }, []);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const router = useRouter();
    const { onSignIn } = AuthContextState();

    async function onLogin(data: AuthLogin) {
        if (isChecked) {
            cookie.set(
                "remember-auth",
                JSON.stringify({
                    email: getValues("email"),
                })
            );
        }
        try {
            await onSignIn(data);
            router.reload();
        } catch (error: any) {
            toast.error(error.message);
            resetField("password");
        }
    }

    function onRemember() {
        setIsChecked(!isChecked);
    }
    return (
        <>
            <ToastContainer toastClassName="bg-paper-light dark:bg-paper-dark dark:text-white" />
            <div className="flex p-4 flex-col justify-center items-center gap-3">
                <h2 className="text-3xl font-semibold dark:text-white">
                    Log In
                </h2>
                <p className="text-gray2 dark:text-white">
                    Become a part of our community
                </p>
            </div>
            <HrExtra />
            <form
                onSubmit={handleSubmit(onLogin)}
                className="w-[400px] mx-auto py-6"
            >
                <AuthFormcontrolComponent
                    control={control}
                    {...authLoginForm.email}
                />
                <AuthFormcontrolComponent
                    control={control}
                    {...authLoginForm.password}
                />
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        onChange={onRemember}
                        name="remember"
                    />
                    <p className="dark:text-white">Remember Me</p>
                </div>
                <TerciaryButton
                    type="submit"
                    className="w-full mt-4 py-3"
                    title="Log In"
                />
                <p className="mt-2 text-center text-sm dark:text-white">
                    Olvidate tu contraseña?
                </p>
            </form>
            <HrExtra />
            <div className="flex justify-center gap-6 items-center py-4">
                <p className="dark:text-white text-sm">No eres un miembro?</p>
                <TerciaryButton
                    onClick={changeModeRegister}
                    title="Registrarse"
                />
            </div>
        </>
    );
}
