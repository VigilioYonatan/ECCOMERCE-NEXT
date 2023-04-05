import { useForm } from "react-hook-form";
import { HrExtra } from "~/components/extras/Hr.extra";
import { AuthLogin } from "../schemas/auth.schema";
import { AuthFormcontrolComponent } from "./AuthFormcontrol.component";
import { authLoginForm } from "../form/authLogin.form";
import { TerciaryButton } from "~/components/buttons/Terciary.button";

type RegisterComponentProps = {
    changeModeRegister: () => void;
};
export function RegisterComponent({
    
    changeModeRegister,
}: RegisterComponentProps) {
    const { control, handleSubmit } = useForm<AuthLogin>();

    function onRegistar(data: AuthLogin) {
        console.log({ data });
    }
    return (
        <>
            <div className="flex p-4 flex-col justify-center items-center gap-3">
                <h2 className="text-3xl font-semibold dark:text-white">
                    Registrar
                </h2>
                <p className="text-gray2 dark:text-white">
                    Registraste y unetenos
                </p>
            </div>
            <HrExtra />
            <form
                onSubmit={handleSubmit(onRegistar)}
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

                <TerciaryButton
                    onClick={() => {}}
                    className="w-full mt-4 py-3"
                    title="Registrar"
                />
            </form>
            <HrExtra />
            <div className="flex justify-center gap-6 items-center py-4">
                <p className="dark:text-white text-sm">Ya tienes una cuenta?</p>
                <TerciaryButton onClick={changeModeRegister} title="Unirse" />
            </div>
        </>
    );
}
