import { useDropwdown } from "~/hooks/useDropdown.hook";
import { AuthFormComponent } from "./AuthForm.component";
import { AuthContextState } from "../context/auth.context";
import { NotifyCard } from "~/components/dropdowns/Notify.dropdown";
import { HrExtra } from "~/components/extras/Hr.extra";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import Link from "next/link";
import { NotifyClickDropdown } from "~/components/dropdowns/NotifyClick.dropdown";

export function AuthHeaderComponent() {
    const authModal = useDropwdown();
    const { state, onLogout } = AuthContextState();
    if (state.status === "checking") {
        return <li>Cargandoo...</li>;
    }
    if (state.status === "authenticated" && state.user) {
        return (
            <li className="relative hover-dropwdown">
                <NotifyClickDropdown
                    className="min-w-[200px] -right-8 top-6"
                    ButtomComponent={(onOpen) => (
                        <p
                            onClick={onOpen}
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            Hola <b>{state.user && state.user.nombre}</b>
                            <ChevronDownIcon className="w-3 h-3 text-white ml-1" />
                        </p>
                    )}
                >
                    <div className="rounded-full w-[60px] h-[60px] overflow-hidden my-2 mx-auto">
                        <img
                            width={60}
                            height={60}
                            src="https://cdn.monstercat.com/share.png"
                            alt={state.user.nombre}
                        />
                    </div>
                    <HrExtra />
                    <div className="flex flex-col ">
                        <Link href="/admin" className="py-1 text-center">
                            Ir a Admin
                        </Link>
                        <button
                            onClick={onLogout}
                            className="py-1 text-white text-center bg-red-600 hover:bg-red-500 "
                        >
                            Salir
                        </button>
                    </div>
                </NotifyClickDropdown>
            </li>
        );
    }

    return (
        <li className="hover:text-primary">
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    authModal.methods.onOpen();
                }}
                className="flex items-center gap-1"
            >
                <UserCircleIcon className="w-4 h-4" />
                <p>Sign in / Register</p>
            </button>
            <AuthFormComponent {...authModal} />
        </li>
    );
}
