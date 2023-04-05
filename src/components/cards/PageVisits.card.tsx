import ArrowDownIcon from "@heroicons/react/24/outline/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/outline/ArrowUpIcon";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";

export function PageVisitsCard() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-paper-dark w-full mb-6 shadow-lg rounded py-4 ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-primary">
                                Page visits
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                className="bg-primary dark:text-white active:bg-opacity-70 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6   dark:text-paper-light align-middle border border-solid border-primary py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Page name
                                </th>
                                <th className="px-6  dark:text-paper-light align-middle border border-solid border-primary py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Visitors
                                </th>
                                <th className="px-6  dark:text-paper-light align-middle border border-solid border-primary py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Unique users
                                </th>
                                <th className="px-6  dark:text-paper-light align-middle border border-solid border-primary py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Bounce rate
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-grayHard dark:text-white">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    /argon/
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    4,569
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    340
                                </td>
                                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <ArrowDownIcon className="mr-1 text-error w-4 h-4" />
                                    46,53%
                                </td>
                            </tr>
                            <tr className="text-grayHard dark:text-white">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    /argon/index.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    3,985
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    319
                                </td>
                                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <ArrowDownIcon className="mr-1 text-error w-4 h-4" />
                                    46,53%
                                </td>
                            </tr>
                            <tr className="text-grayHard dark:text-white">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    /argon/charts.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    3,513
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    294
                                </td>
                                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 dark:text-white">
                                    <ArrowUpIcon className="mr-1 text-success w-4 h-4" />
                                    36,49%
                                </td>
                            </tr>
                            <tr className="text-grayHard dark:text-white">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    /argon/tables.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    2,050
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    147
                                </td>
                                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <ArrowUpIcon className="mr-1 text-success w-4 h-4" />
                                    50,87%
                                </td>
                            </tr>
                            <tr className="text-grayHard dark:text-white">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    /argon/profile.html
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    1,795
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    190
                                </td>
                                <td className="flex items-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <ArrowDownIcon className="mr-1 text-error w-4 h-4" />
                                    46,53%
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-col items-center mt-2">
                        <span className="text-sm text-gray2 ">
                            Mostrando{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                1
                            </span>{" "}
                            en
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {" "}
                                10
                            </span>{" "}
                            de{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                100
                            </span>{" "}
                            Entradas
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0 text-white">
                            <button className="rounded-l-md inline-flex items-center py-2 px-4 text-sm font-medium bg-primary">
                                <ArrowLeftIcon className="mr-2 w-4 h-4" />
                                Prev
                            </button>
                            <button className="rounded-r-md inline-flex items-center py-2 px-4 text-sm font-medium bg-primary">
                                Next
                                <ArrowRightIcon className="ml-2 W-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
