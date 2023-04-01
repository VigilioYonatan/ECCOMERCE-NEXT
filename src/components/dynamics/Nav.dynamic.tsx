import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import Link from "next/link";
import { useRouter } from "next/router";
type NavDynamicProps = { path: string; title: string };
function NavDynamic({ path, title }: NavDynamicProps) {
    const { asPath } = useRouter();

    return (
        <li>
            <Link
                className={`flex items-center gap-2 font-semibold hover:text-primary text-center ${
                    asPath === path
                        ? "text-primary"
                        : "dark:text-white text-black"
                } `}
                href={path}
            >
                <p>{title}</p>
                <ChevronDownIcon className="w-3 h-3 text-white" />
            </Link>
        </li>
    );
}
export default NavDynamic;
