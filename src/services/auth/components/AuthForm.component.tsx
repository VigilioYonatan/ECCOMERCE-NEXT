import { PortalExtra } from "~/components/extras/Portal.extra";
import { UseDropwdownReturn } from "~/hooks/useDropdown.hook";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { LoginComponent } from "./Login.component";
import { RegisterComponent } from "./Register.component";
import { useState } from "react";

export function AuthFormComponent({
    state,
    methods,
    refs,
}: UseDropwdownReturn<any>) {
    const [isRegister, setIsRegister] = useState(false);
    function changeModeRegister() {
        setIsRegister(!isRegister);
    }

    return (
        <PortalExtra isOpen={state}>
            <div
                ref={refs.node}
                className="flex justify-center items-center h-full"
            >
                <div className="relative w-full sm:w-[500px] mx-2 bg-paper-light dark:bg-paper-dark shadow">
                    <button
                        type="button"
                        onClick={methods.onClose}
                        className="absolute m-3 top-0 right-0"
                    >
                        <XMarkIcon className="w-8 dark:text-gray2 h-8" />
                    </button>
                    <div className={`${isRegister ? "" : "hidden"}`}>
                        <RegisterComponent
                            changeModeRegister={changeModeRegister}
                        />
                    </div>
                    <div className={`${isRegister ? "hidden" : ""}`}>
                        <LoginComponent
                            changeModeRegister={changeModeRegister}
                        />
                    </div>
                </div>
            </div>
        </PortalExtra>
    );
}
