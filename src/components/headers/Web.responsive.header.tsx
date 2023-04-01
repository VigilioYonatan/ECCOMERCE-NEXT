import XCircleIcon from "@heroicons/react/24/outline/XCircleIcon";
import Link from "next/link";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { Fragment, RefObject } from "react";
import { HrExtra } from "../extras/Hr.extra";
import { webNavs } from "~/utils/client/navs/web.nav";
import dynamic from "next/dynamic";
const NavDynamic = dynamic(() => import("../dynamics/Nav.dynamic"), {
    ssr: false,
});
type WebHeaderResponsiveProps = {
    state: boolean;
    refs: {
        node: RefObject<object>;
    };
    onClose(): void;
};
export const WebResponsiveHeader = ({
    state,
    refs,
    onClose,
}: WebHeaderResponsiveProps) => {
    return (
        <div
            className={`${
                state ? "show" : "hidden"
            } fixed top-0 left-0 right-0 md:hidden z-50 bottom-0 bg-black bg-opacity-60`}
        >
            <nav
                ref={refs.node as RefObject<HTMLDivElement>}
                className={`${
                    state ? "modal-close" : "modal-open"
                }  bg-paper-dark shadow-sm h-screen   sm:w-[300px]`}
            >
                <div
                    onClick={onClose}
                    className="cursor-pointer bg-primary flex items-center gap-1 justify-center py-3"
                >
                    <XCircleIcon className="w-4 h-4 text-white" />
                    <p className="text-center text-white uppercase text-sm">
                        Quick navigation
                    </p>
                </div>
                <Link
                    href="/"
                    className="text-2xl text-center block uppercase font-bold dark:text-white py-3"
                >
                    Logo
                </Link>

                <ul className="flex flex-col items-center gap-4 p-2">
                    <HrExtra />
                    {webNavs.map(({ path, title }) => (
                        <Fragment key={title}>
                            <NavDynamic path={path} title={title} />
                            <HrExtra />
                        </Fragment>
                    ))}
                </ul>
                <div className="mt-6 px-3">
                    <div className="flex items-center justify-between gap-3 bg-primary py-3 px-3">
                        <ListBulletIcon className="w-6 h-6 text-white" />
                        <p className="text-white uppercase text-sm font-semibold">
                            All Categories
                        </p>
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    </div>
                </div>
            </nav>
        </div>
    );
};
