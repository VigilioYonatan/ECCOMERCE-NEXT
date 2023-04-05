import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";

export function SettingsCard() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white dark:bg-primary mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-grayHard dark:text-black text-xl font-bold">
                            My account
                        </h6>
                        <button
                            className="bg-primary dark:bg-background-dark text-black dark:text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            <Cog6ToothIcon className="w-4 h-4 mr-2" />
                            Settings
                        </button>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0  dark:bg-paper-dark">
                    <form noValidate>
                        <h6 className="text-gray text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        // defaultValue="lucky.jesse"
                                        placeholder="hhho"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="jesse@example.com"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Lucky"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Jesse"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 " />

                        <h6 className="text-gray text-sm mt-3 mb-6 font-bold uppercase">
                            Contact Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="New York"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="United States"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard  dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 dark:text-white bg-white dark:bg-background-dark  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Postal Code"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 " />

                        <h6 className="text-gray text-sm mt-3 mb-6 font-bold uppercase">
                            About Me
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-grayHard dark:text-white text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        About me
                                    </label>
                                    <textarea
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 dark:text-white bg-white dark:bg-background-dark rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <button className="bg-primary hover:bg-opacity-70 py-2  px-4 block mx-auto rounded-lg font-bold uppercase">
                            <PlusIcon className="mr-2 w-5 h-4" />
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
