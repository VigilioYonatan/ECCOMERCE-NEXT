import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import LanguageIcon from "@heroicons/react/24/outline/LanguageIcon";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import Link from "next/link";
import useDropwdown from "~/hooks/useDropdown.hook";
import { WebResponsiveHeader } from "./Web.responsive.header";
import { webNavs } from "~/utils/client/navs/web.nav";
import { PrincipalButton } from "../buttons/Principal.button";
import { HrExtra } from "../extras/Hr.extra";
import dynamic from "next/dynamic";
const NavDynamic = dynamic(() => import("../dynamics/Nav.dynamic"), {
    ssr: false,
});
export function WebHeader() {
    const { state, refs, methods } = useDropwdown();

    return (
        <header id="header" className="dark:bg-paper-dark bg-paper-light">
            <div className="container mx-auto flex flex-col md:flex-row gap-2 justify-between items-center py-2 px-4 text-white ">
                <ul className="flex items-center text-xs gap-5">
                    <li className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4" />
                        <p>Call Us: (+084) 859-481-3614</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <EnvelopeIcon className="w-4 h-4" />
                        <p>Email: mekog@support.com</p>
                    </li>
                </ul>
                <ul className="flex items-center text-xs gap-5 ">
                    <li className="hover:text-primary flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <CurrencyDollarIcon className="w-4 h-4" />
                            <p>Currency</p>
                        </div>

                        <ChevronDownIcon className="w-3 h-3 text-white" />
                    </li>
                    <li className="hover:text-primary flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <LanguageIcon className="w-4 h-4" />
                            <p>Language</p>
                        </div>
                        <ChevronDownIcon className="w-3 h-3 text-white" />
                    </li>
                    <li className="hover:text-primary">
                        <div className="flex items-center gap-1">
                            <UserCircleIcon className="w-4 h-4" />
                            <p>Sign in / Register</p>
                        </div>
                    </li>
                </ul>
            </div>
            <HrExtra />
            <div className="container mx-auto py-6 px-2 ">
                <div className="flex gap-2 justify-between items-center ">
                    <div className="md:hidden">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                methods.onOpen();
                            }}
                            type="button"
                            className="flex items-center"
                        >
                            <Bars3Icon className="w-8 h-8 dark:text-white text-primary" />
                        </button>
                    </div>
                    <WebResponsiveHeader
                        onClose={methods.onClose}
                        state={state}
                        refs={refs}
                    />
                    <Link
                        href="/"
                        className="text-2xl uppercase font-bold dark:text-white"
                    >
                        Logo
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-3">
                            {webNavs.map(({ path, title }) => (
                                <NavDynamic
                                    key={title}
                                    path={path}
                                    title={title}
                                />
                            ))}
                        </ul>
                    </nav>
                    <ul className="flex items-center gap-4">
                        <li className="relative cursor-pointer">
                            <HeartIcon className="w-6 h-6 hover:text-primary dark:text-white" />
                            <p className="absolute bottom-3 left-4 px-1.5 text-xs rounded-full text-white bg-primary">
                                0
                            </p>
                        </li>
                        <li className="relative flex items-center gap-3 cursor-pointer">
                            <ShoppingCartIcon className="w-6 h-6 hover:text-primary dark:text-white" />
                            <p className="absolute bottom-3 left-4 px-1.5 rounded-full text-xs text-white bg-primary ">
                                0
                            </p>
                            <p className="font-bold dark:text-white text-black">
                                $0.00
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="bg-primary">
                <div className="flex items-center  gap-6 container mx-auto">
                    <div className="hidden">
                        <div className="flex items-center gap-3 bg-primaryDark py-3 px-3">
                            <ListBulletIcon className="w-6 h-6 text-white" />
                            <p className="text-white uppercase text-sm font-semibold">
                                All Categories
                            </p>
                            <ChevronDownIcon className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="w-full my-1 flex items-center py-1 px-2 gap-4 bg-paper-light dark:bg-paper-dark">
                        <MagnifyingGlassIcon className="w-5 h-5 text-primary" />
                        <input
                            className="bg-transparent w-full outline-none text-xs dark:text-white "
                            type="text"
                            placeholder="Enter your keyword..."
                        />
                        <PrincipalButton title="Search" />
                    </div>
                </div>
            </nav>
        </header>
    );
}
