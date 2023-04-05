import { ButtonHTMLAttributes } from "react";

type TerciaryButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};
export const TerciaryButton = ({
    title,
    onClick,
    className = "",
    type = "button",
}: TerciaryButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick || undefined}
            className={`text-white hover:bg-white outline outline-black hover:text-black transition-colors delay-75 bg-black px-4 py-2 font-semibold text-sm ${className}`}
        >
            {title}
        </button>
    );
};
