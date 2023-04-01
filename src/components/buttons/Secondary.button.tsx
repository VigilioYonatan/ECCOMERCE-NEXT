type SecondaryButtonProps = { title: string };
export const SecondaryButton = ({ title }: SecondaryButtonProps) => {
    return (
        <button className="text-black hover:bg-black hover:text-white transition-colors delay-75 bg-white px-6 py-2 font-semibold text-sm">
            {title}
        </button>
    );
};
