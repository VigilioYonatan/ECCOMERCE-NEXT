import { Fragment, useState } from "react";
import { NotificationDropdown } from "../dropdowns/Notification.dropdown";
import { UserDropdown } from "../dropdowns/User.dropdown";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Cog8ToothIcon from "@heroicons/react/24/outline/Cog8ToothIcon";
import Link from "next/link";

export function AdminSidebar() {
    const [collapseShow, setCollapseShow] = useState("hidden");
    const { extras, methods } = ThemeContextState();

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white dark:bg-paper-dark flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-grayHard dark:text-primary opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow(
                                "bg-white dark:bg-paper-dark shadow dark:shadow-white m-2 py-3 px-6"
                            )
                        }
                    >
                        <Bars3Icon className="text-grayHard  dark:text-primary w-7 h-7" />
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-primary text-left md:pb-2 text-grayHard dark:text-primary mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-4"
                        href="/"
                    >
                        <p>Notus React</p>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="hover-dropwdown inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block hover-dropwdown relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid ">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2  text-primary mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        href="/"
                                    >
                                        Notus React
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-grayHard dark:text-primary opacity-60 md:hidden px-4 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow("hidden")
                                        }
                                    >
                                        <XMarkIcon className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>
                        {sideBarMenu.map(({ links, title }) => (
                            <Fragment key={title}>
                                {/* Divider */}
                                <HrExtra />
                                {/* Heading */}
                                <h6 className="md:min-w-full  dark:text-gray2 text-xs uppercase font-bold block pt-1 px-4 pb-4 no-underline">
                                    {title}
                                </h6>
                                {/* Navigation */}
                                {links.map(({ Icon, link, linkTitle }) => (
                                    <ul
                                        key={linkTitle}
                                        className="md:flex-col  md:min-w-full flex flex-col list-none"
                                    >
                                        <li className="items-center ">
                                            <Link
                                                className={`text-xs hover:text-white hover:bg-red-600 uppercase py-3 font-bold   text-primary"
                                                            text-grayHard px-4 hover:text-opacity-70 dark:text-white flex`}
                                                href={link}
                                            >
                                                <Icon className="mr-3 text-sm w-4 h-4" />
                                                {linkTitle}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </Fragment>
                        ))}
                        <HrExtra />
                        {/* Heading */}
                        <h6 className="md:min-w-full  dark:text-gray2 text-xs uppercase font-bold block pt-1 px-4 pb-4 no-underline">
                            Settings
                        </h6>
                        <ul className="md:flex-col  md:min-w-full flex flex-col list-none">
                            <li className="flex flex-col px-4">
                                <p
                                    className={`text-xs hover:text-white uppercase py-3 font-bold   text-primary"
                                                            text-grayHard hover:text-opacity-70 dark:text-white flex`}
                                >
                                    Theme Mode
                                </p>
                                <div className="flex gap-4">
                                    {extras.arrayThemeMode.map(
                                        ({ theme, Icon }) => (
                                            <div
                                                key={theme}
                                                className="flex flex-col  gap-2"
                                            >
                                                <Icon className="w-5 h-5 dark:text-white" />
                                                <input
                                                    type="radio"
                                                    name="theme"
                                                    className="cursor-pointer accent-primary"
                                                    value={theme}
                                                    checked={extras.checked(
                                                        theme
                                                    )}
                                                    onChange={
                                                        methods.changeThemeMode
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
import TvIcon from "@heroicons/react/24/outline/TvIcon";
import WrenchScrewdriverIcon from "@heroicons/react/24/outline/WrenchScrewdriverIcon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import FingerPrintIcon from "@heroicons/react/24/outline/FingerPrintIcon";
import ClipboardIcon from "@heroicons/react/24/outline/ClipboardIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { HrExtra } from "../extras/Hr.extra";
import { NotifyThemeCard } from "~/context/theme/components/NotifyThemeCard.component";
import { ThemeContextState } from "~/context/theme/theme.context";

interface Links {
    Icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
            title?: string | undefined;
            titleId?: string | undefined;
        } & React.RefAttributes<SVGSVGElement>
    >;
    linkTitle: string;
    link: string;
}
interface SideBarMenu {
    title: string;
    links: Links[];
}
export const sideBarMenu: SideBarMenu[] = [
    {
        title: "Admin Pages",
        links: [
            {
                Icon: TvIcon,
                linkTitle: "Dashboard",
                link: "/",
            },
            {
                Icon: WrenchScrewdriverIcon,
                linkTitle: "Settings",
                link: "/settings",
            },
            {
                Icon: TableCellsIcon,
                linkTitle: "Tables",
                link: "/admin/settings",
            },
            {
                Icon: MapPinIcon,
                linkTitle: "Maps",
                link: "/admin/settings",
            },
        ],
    },
    {
        title: "Auth Pages",
        links: [
            {
                Icon: FingerPrintIcon,
                linkTitle: "Login",
                link: "/admin",
            },
            {
                Icon: ClipboardIcon,
                linkTitle: "Register",
                link: "/admin/settings",
            },
        ],
    },
];
