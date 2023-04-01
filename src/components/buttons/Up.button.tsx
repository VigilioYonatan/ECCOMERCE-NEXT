import ChevronDoubleUpIcon from "@heroicons/react/24/solid/ChevronDoubleUpIcon";
import Link from "next/link";
export function UpButton() {
    return (
        <a
            href="#header"
            className="bg-primary hover:bg-black p-3 fixed bottom-0 right-0 m-4"
            type="button"
        >
            <ChevronDoubleUpIcon className="w-6 h-x text-white" />
        </a>
    );
}
