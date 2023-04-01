import { useState, useEffect, RefObject, useRef } from "react";
type UseDropwdownReturn<T> = {
    state: boolean;
    methods: {
        onOpen(): void;
        onClose(): void;
        onOpenClose(): void;
    };
    refs: { node: RefObject<T> };
};
function useDropwdown<T extends object>(): UseDropwdownReturn<T> {
    const node = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    function onOpen() {
        setIsOpen(true);
    }
    function onClose() {
        setIsOpen(false);
    }

    function onOpenClose() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            const documentElement = document.documentElement;
            const actionEvent = (ev: globalThis.MouseEvent) => {
                if (node.current && (node.current as any).contains(ev.target)) {
                    return;
                }
                onClose();
            };
            documentElement.addEventListener("click", actionEvent);
            return () => {
                documentElement.removeEventListener("click", actionEvent);
            };
        }
    }, []);

    return {
        state: isOpen,
        methods: {
            onOpen,
            onClose,
            onOpenClose,
        },
        refs: { node },
    };
}

export default useDropwdown;