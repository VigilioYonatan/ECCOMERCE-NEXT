import BellIcon from "@heroicons/react/24/outline/BellIcon";
import { RefObject } from "react";
import { useDropwdown } from "~/hooks/useDropdown.hook";
import { NotifyCard } from "./Notify.dropdown";
import { NotifyClickDropdown } from "./NotifyClick.dropdown";

export const NotificationDropdown = () => {
    // dropdown props
    const { state, methods, refs } = useDropwdown();

    return (
        <NotifyClickDropdown
            ButtomComponent={(onOpen) => (
                <button
                    onClick={onOpen}
                    type="button"
                    className="dark:text-primary block py-1 px-3"
                >
                    <BellIcon className="w-6 h-6 " />
                </button>
            )}
        >
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
                Action
            </a>
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
                Another action
            </a>
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
                Something else here
            </a>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
                Seprated link
            </a>
        </NotifyClickDropdown>
    );
};
