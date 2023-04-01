type HrExtraProps = { classname?: string };
export function HrExtra({ classname = "" }: HrExtraProps) {
    return <div className={`w-full h-[2px] bg-hrColor ${classname}`} />;
}
