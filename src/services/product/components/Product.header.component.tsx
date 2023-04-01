import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import MagnifyingGlassPlusIcon from "@heroicons/react/24/outline/MagnifyingGlassPlusIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";

type ProductHeaderComponentProps = { children: JSX.Element | JSX.Element[] };
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
                src="https://demo-60.woovinapro.com/wp-content/uploads/2021/01/product-1-300x313.jpg"
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
