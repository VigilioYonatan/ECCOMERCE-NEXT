
import { NotifyClickDropdown } from "./NotifyClick.dropdown";

export const UserDropdown = () => {
    return (
        <NotifyClickDropdown
            ButtomComponent={(onOpen) => (
                <button onClick={onOpen} className="text-blueGray-500 block">
                    <div className="items-center flex">
                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                            <img
                                alt="..."
                                className="w-full rounded-full align-middle border-none shadow-lg"
                                src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                            />
                        </span>
                    </div>
                </button>
            )}
        >
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-primary hover:text-black"
            >
                Action
            </a>
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-primary hover:text-black"
            >
                Another action
            </a>
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-primary hover:text-black"
            >
                Something else here
            </a>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-primary hover:text-black"
            >
                Seprated link
            </a>
        </NotifyClickDropdown>
    );
};
