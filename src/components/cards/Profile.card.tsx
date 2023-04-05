import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
import ChatBubbleLeftIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon";
import MapIcon from "@heroicons/react/24/outline/MapIcon";
import BriefcaseIcon from "@heroicons/react/24/outline/BriefcaseIcon";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";

export function ProfileCard() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-paper-dark w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img
                                    alt="..."
                                    src="./img/vue.jpg"
                                    className="shadow-xl rounded-full "
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-2">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide dark:text-white">
                                        22
                                    </span>
                                    <span className="text-sm text-gray">
                                        <UsersIcon className="mr-2 w-4 h-4" />
                                        Friends
                                    </span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide dark:text-white">
                                        10
                                    </span>
                                    <span className="text-sm text-gray">
                                        <PhotoIcon className="mr-2 w-4 h-4" />
                                        Photos
                                    </span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide dark:text-white">
                                        89
                                    </span>
                                    <span className="text-sm text-gray">
                                        <ChatBubbleLeftIcon className="mr-2 w-4 h-4" />
                                        Comments
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-white">
                            Jenna Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase">
                            <MapIcon className="mr-2 w-4 h-4" />
                            Los Angeles, California
                        </div>
                        <div className="mb-2 dark:text-white mt-10">
                            <BriefcaseIcon className="mr-2 w-4 h-4" />
                            Solution Manager - Creative Tim Officer
                        </div>
                        <div className="mb-2 dark:text-white">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            <AcademicCapIcon className="mr-2 w-4 h-4" />
                            University of Computer Science
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed dark:text-white">
                                    An artist of considerable range, Jenna the
                                    name taken by Melbourne-raised,
                                    Brooklyn-based Nick Murphy writes, performs
                                    and records all of his own music, giving it
                                    a warm, intimate feel with a solid groove
                                    structure. An artist of considerable range.
                                </p>
                                <a
                                    href="#pablo"
                                    className="font-bold mt-2  bg-primary py-1 px-3  rounded-md"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
