type NotifyCardProps = { children: JSX.Element | JSX.Element[] };
export function NotifyCard({ children }: NotifyCardProps) {
    return (
        <div className="hover-dropwdown-child absolute top-6 bg-paper-light dark:bg-paper-dark z-10 shadow-sm dark:border dark:border-gray2 p-2 rounded-sm">
            {children}
        </div>
    );
}
