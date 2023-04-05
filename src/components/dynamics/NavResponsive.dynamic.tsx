import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import Link from "next/link";
import { useRouter } from "next/router";
type NavDynamicProps = { path: string; title: string };
function NavDynamicResponsive({ path, title }: NavDynamicProps) {
    const { asPath } = useRouter();

    return (
        <li className="w-full px-3">
            <Link
                className={`flex justify-between w-full items-center gap-2 font-semibold hover:text-primary text-center ${
                    asPath === path
                        ? "text-primary"
                        : "dark:text-white text-black"
                } `}
                href={path}
            >
                <p>{title}</p>
                <PlusCircleIcon className="w-6 h-6 text-white" />
            </Link>
        </li>
    );
}

export default NavDynamicResponsive;
