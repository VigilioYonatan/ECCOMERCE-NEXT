import { FacebookIco } from "~/assets/icos/Facebook.ico";
import { UpButton } from "../buttons/Up.button";

export const WebFooter = () => {
    return (
        <footer className="px-4 py-6 bg-paper-light dark:bg-paper-dark">
            <UpButton />
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row  items-center gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold dark:text-white">
                            Call to Order
                        </p>
                        <p className="text-2xl text-primary">
                            (+084) 859-481-3614
                        </p>
                        <p className="dark:text-white">
                            There are many variations passages of available, but
                            the majority have suffered alteration injected
                        </p>
                        <p className="flex dark:text-white items-center gap-2 font-semibold">
                            Address:{" "}
                            <span className="font-normal">
                                139 Brook Drive South Richmond Hill, NY
                            </span>
                        </p>
                        <p className="flex dark:text-white items-center gap-2 font-semibold">
                            Email:{" "}
                            <span className="font-normal">
                                mekog@support.com
                            </span>
                        </p>
                        <div className="flex dark:text-white items-center gap-2 font-semibold">
                            Follow Us:{" "}
                            <div className="flex items-center gap-1">
                                <FacebookIco />
                                <FacebookIco />
                                <FacebookIco />
                                <FacebookIco />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4  gap-5 justify-between w-full">
                        <ul className="flex flex-col gap-2">
                            <li className="dark:text-white font-semibold ">
                                Company Infor
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                About Us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Contact us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="dark:text-white font-semibold ">
                                Company Infor
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                About Us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Contact us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="dark:text-white font-semibold ">
                                Company Infor
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                About Us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Contact us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="dark:text-white font-semibold ">
                                Company Infor
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                About Us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Contact us
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                            <li className="dark:text-white text-sm hover:text-primary">
                                Blogs
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between py-2 mt-4 items-center">
                    <p className="text-white text-sm">
                        © Copyright 2023{" "}
                        <span className="text-primary">Mekog</span> - All Rights
                        Reserved - Powered by{" "}
                        <span className="text-primary">Vigilio</span>.
                    </p>
                    <div className="">
                        <img
                            src="https://demo-60.woovinapro.com/wp-content/uploads/2022/03/payment.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};
