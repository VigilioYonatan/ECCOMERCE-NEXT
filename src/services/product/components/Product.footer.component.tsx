import dynamic from "next/dynamic";
import Link from "next/link";
const StartsExtra = dynamic(() => import("~/components/extras/Starts.extra"), {
    ssr: false,
});

type ProductFooterComponentProps = { children: JSX.Element | JSX.Element[] };
export function ProductFooterComponent({
    children,
}: ProductFooterComponentProps) {
    return <div className="flex flex-col gap-1">{children}</div>;
}

export function ProductFooterTitleComponent() {
    return (
        <Link
            href={"/"}
            className="text-sm text-center dark:text-white hover:text-primary text-responsive "
        >
            Microsoft Xbox One S Controller – Gears 5 Kait Lorem, ipsum dolor.
        </Link>
    );
}
export function ProductFooterStartComponent() {
    return (
        <div className="flex items-center justify-between">
            <StartsExtra />
            <p className="text-sm text-white">8 Sold</p>
        </div>
    );
}
export function ProductFooterPriceComponent() {
    return (
        <div className="flex items-center gap-2">
            <p className="font-semibold text-sm dark:text-white">$109.00</p>
            <p className="text-white text-xs line-through">$139.00</p>
        </div>
    );
}
