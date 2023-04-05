import { useRouter } from "next/router";
import { UserDropdown } from "../dropdowns/User.dropdown";
import { StatsCard } from "../cards/Stats.card";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import ChartPieIcon from "@heroicons/react/24/outline/ChartPieIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import ReceiptPercentIcon from "@heroicons/react/24/outline/ReceiptPercentIcon";

export function AdminHeader() {
    const { pathname } = useRouter();

    return (
        <>
            {/* Navbar */}
            <nav className="absolute  top-0 left-0 w-full z-20 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full  mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <p className="text-grayHard hidden dark:text-primary text-sm uppercase lg:inline-block font-semibold">
                        {pathname === "/" ? "Dashboard" : pathname.substring(1)}
                    </p>
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <MagnifyingGlassIcon className="dark:text-white w-4 h-4" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="border-0 px-3 py-3 placeholder-blueGray-300  relative dark:bg-paper-dark dark:text-white  rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                            />
                        </div>
                    </form>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <UserDropdown />
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
            <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <StatsCard
                                    title="TRAFFIC"
                                    total="350,897"
                                    percentaje="3.48"
                                    ico={ChartBarIcon}
                                    date="Since last month"
                                    background="bg-error"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <StatsCard
                                    title="NEW USERS"
                                    total="2,356"
                                    percentaje="3.48"
                                    ico={ChartPieIcon}
                                    date="Since last week"
                                    background="bg-pink"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <StatsCard
                                    title="SALES"
                                    total="924"
                                    percentaje="1.10"
                                    date="Since yesterday"
                                    ico={UsersIcon}
                                    background="bg-blue"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <StatsCard
                                    title="PERFORMANCE"
                                    total="49,65%"
                                    percentaje="12"
                                    date="Since last month"
                                    ico={ReceiptPercentIcon}
                                    background="bg-orange"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
