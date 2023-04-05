import { TableDropdown } from "../dropdowns/Table.dropdown";

export function TableCard() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-paper-dark bg-paper-light dark:text-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-white">
                                Card Tables
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                    Project
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                    Budget
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                    Status
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                    Users
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                    Completion
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>
                                    <span className="ml-3 font-bold ">
                                        Argon Design System
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $2,500 USD
                                </td>
                                <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="mr-2 bg-[yellow] w-3 h-3 inline-block rounded-full" />
                                    pending
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">60%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-paper-light">
                                                <div
                                                    style={{ width: "60%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[yellow]"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>
                                    <span className="ml-3 font-bold ">
                                        Angular Now UI Kit PRO
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $1,800 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="mr-2 bg-[success] w-3 h-3 inline-block rounded-full" />
                                    completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-success">
                                                <div
                                                    style={{ width: "100%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-success"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>
                                    <span className="ml-3 font-bold ">
                                        Black Dashboard Sketch
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $3,150 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="mr-2 bg-orange w-3 h-3 inline-block rounded-full" />
                                    delayed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">73%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-paper-light">
                                                <div
                                                    style={{ width: "73%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>
                                    <span className="ml-3 font-bold ">
                                        React Material Dashboard
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $4,400 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="mr-2 bg-pink w-3 h-3 inline-block rounded-full" />
                                    on schedule
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">90%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-paper-light">
                                                <div
                                                    style={{ width: "90%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>
                                    <span className="ml-3 font-bold ">
                                        React Material Dashboard
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $2,200 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="mr-2 bg-success w-3 h-3 inline-block rounded-full" />
                                    completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                <div
                                                    style={{ width: "100%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-success"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
