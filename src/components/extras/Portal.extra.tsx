import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
type PortalProps = {
    isOpen: boolean;
    // onClose: () => void;
    children: JSX.Element | JSX.Element[];
};
export function PortalExtra({ isOpen, children }: PortalProps) {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#portal");
        setMounted(true);
    }, []);

    return mounted && ref.current
        ? createPortal(
              <>
                  <div
                      className={`${
                          isOpen
                              ? " visible opacity-100 "
                              : "invisible opacity-0 "
                      } fixed block transition-all delay-300  left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-70 z-50`}
                      //   onClick={onClose}
                  >
                      {children}
                  </div>
              </>,

              ref.current
          )
        : null;
}
