import { RefObject } from "preact";
import { useDropwdown } from "~/hooks/useDropdown.hook";

type NotifyClickDropdownProps = {
    ButtomComponent: (onOpen: () => void) => JSX.Element | JSX.Element[];
    className: string;
    children: JSX.Element | JSX.Element[];
};
export function NotifyClickDropdown({
    ButtomComponent,
    className,
    children,
}: NotifyClickDropdownProps) {
    const { refs, methods, state } = useDropwdown();

    return (
        <div ref={refs.node as RefObject<HTMLDivElement>}>
            {ButtomComponent(methods.onOpen)}
            <div
                className={`bg-white dark:bg-paper-dark dark:text-white overflow-hidden text-base z-50 absolute  list-none text-left rounded-md shadow-lg dark:shadow border border-gray2  ${className} ${
                    state ? "show" : "hidde"
                } `}
            >
                {children}
            </div>
        </div>
    );
}
