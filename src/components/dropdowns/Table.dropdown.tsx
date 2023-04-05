import EllipsisHorizontalIcon from "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { RefObject } from "react";
import { useDropwdown } from "~/hooks/useDropdown.hook";

export const TableDropdown = () => {
    const { state, refs, methods } = useDropwdown();
    return (
        <div ref={refs.node as RefObject<HTMLDivElement>}>
            <button onClick={methods.onOpen}>
                <EllipsisHorizontalIcon className="w-4 h-4" />
            </button>
            <div
                className={`${
                    state ? "block" : "hidden"
                } bg-white text-base z-50 absolute right-3 text-white p-1  list-none  rounded shadow-lg min-w-48`}
            >
                <button className="text-sm py-2 px-4 font-normal block w-full mb-2 whitespace-nowrap  bg-success">
                    <PencilIcon className="mr-2 w-4 h-4 inline-block" />
                    Editar
                </button>
                <button className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-error ">
                    <TrashIcon className="mr-2 w-4 h-4 inline-block" />
                    Eliminar
                </button>
            </div>
        </div>
    );
};
