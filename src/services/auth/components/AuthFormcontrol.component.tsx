import { FormController, FormControlComponent } from "control-react-hook-form";

export function AuthFormcontrolComponent<T extends object>(
    props: FormControlComponent<T>
) {
    return (
        <FormController {...props} className=" my-6">
            <FormController.control className="border-custom  p-3 w-full text-black  outline-none bg-transparent dark:text-white" />
            <FormController.error className="mt-2 text-red-600 text-xs" />
        </FormController>
    );
}
