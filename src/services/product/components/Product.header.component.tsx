import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import MagnifyingGlassPlusIcon from "@heroicons/react/24/outline/MagnifyingGlassPlusIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";

export type ProductHeaderComponentProps = {
    children: JSX.Element | JSX.Element[];
};
export function ProductHeaderComponent({
    children,
}: ProductHeaderComponentProps) {
    return (
        <picture className="relative w-full block overflow-hidden">
            <p className="bg-primary absolute m-2 text-xs font-semibold text-white px-2 py-1">
                -22%
            </p>
            <img
                width={200}
                height={200}
                className="w-[inherit] h-[inherit]"
                src="data:image/jpeg;base64,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"
                alt=""
            />
            {children}
        </picture>
    );
}

export function ProductHeaderComponentButtons() {
    return (
        <div className="group-hover:translate-y-0 translate-y-0 transition-transform delay-100 md:translate-y-20 absolute bottom-0 flex justify-center items-center right-0 w-full py-2 md:py-1 gap-4 bg-white">
            <ShoppingCartIcon className="w-6 h-6 md:w-5 md:h-5 hover:text-primary text-gray2 cursor-pointer hover:scale-110" />
            <HeartIcon className="w-6 h-6 md:w-5 md:h-5 hover:text-primary text-gray2 cursor-pointer hover:scale-110" />
            <MagnifyingGlassPlusIcon className="w-6 h-6 md:w-5 md:h-5 hover:text-primary text-gray2 cursor-pointer hover:scale-110" />
        </div>
    );
}
