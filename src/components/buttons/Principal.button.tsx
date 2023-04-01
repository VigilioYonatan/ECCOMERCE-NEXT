type PrincipalButtonProps = { title: string };
export function PrincipalButton({ title }: PrincipalButtonProps) {
    return (
        <button className="text-white bg-primary hover:bg-black transition-colors delay-75 px-6 py-2 font-semibold text-sm">
            {title}
        </button>
    );
}
