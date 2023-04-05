type HrExtraProps = { classname?: string };
export function HrExtra({ classname = "" }: HrExtraProps) {
    return (
        <div
            className={`w-full h-[2px] dark:bg-hrColor bg-[#e2e2e2] ${classname}`}
        />
    );
}
