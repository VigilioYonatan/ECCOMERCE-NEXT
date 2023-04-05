type CardStatsProps = {
    title: string;
    total: string;
    percentaje: string;
    date: string;
    ico: any;
    background: string;
};
export function StatsCard({
    title,
    total,
    percentaje,
    date,
    ico,
    background = "error",
}: CardStatsProps) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-paper-dark rounded mb-6 xl:mb-0 shadow-lg dark:shadow-gray dark:shadow">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-primary uppercase font-bold text-xs">
                                {title}
                            </h5>
                            <span className="font-semibold text-xl dark:text-paper-light">
                                {total}
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={`text-white  p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${background}`}
                            >
                                {/* <FontAwesomeIcon icon={ico} /> */}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                        <span className=" mr-2 text-success">
                            {/* <FontAwesomeIcon
                                className="mr-1"
                                icon={faArrowDown}
                            /> */}
                            {percentaje}
                        </span>
                        <span className="whitespace-nowrap dark:text-gray2">
                            {date}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
