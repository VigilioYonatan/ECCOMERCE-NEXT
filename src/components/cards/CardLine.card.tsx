import { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

export function LineCard() {
    const data: ChartData<"line"> = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: String(new Date().getFullYear()),
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [65, 78, 66, 44, 56, 67, 75],

                fill: false,
            },
            {
                label: String(new Date().getFullYear() - 1),
                fill: false,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: [40, 68, 86, 74, 56, 60, 87],
            },
        ],
    };

    const option: ChartOptions<"line"> = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: "Sales Charts",
                color: "white",
            },
            legend: {
                labels: {
                    color: "white",
                },
                align: "end",
                position: "bottom",
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },

        hover: {
            mode: "nearest",
            intersect: true,
        },

        scales: {
            x: {
                ticks: {
                    color: "rgba(255,255,255,.7)",
                },
                display: true,
                title: { color: "white", display: false, text: "Month" },
                grid: {
                    display: false,
                    // borderDash: [2],
                    // borderDashOffset: 2,

                    color: "rgba(33, 37, 41, 0.3)",
                    tickColor: "rgba(0, 0, 0, 0)",
                    tickBorderDash: [2],
                    tickBorderDashOffset: 2,
                },
            },

            y: {
                ticks: {
                    color: "rgba(255,255,255,.7)",
                },
                display: true,
                title: { color: "white", display: false, text: "Value" },
                grid: {
                    // borderDash: [3],
                    // borderDashOffset: 3,
                    // drawBorder: false,
                    color: "rgba(255, 255, 255, 0.15)",
                    tickColor: "rgba(33, 37, 41, 0)",
                    tickBorderDash: [2],
                    tickBorderDashOffset: 2,
                },
            },
        },
    };

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-paper-dark bg-paper-light dark:shadow-gray dark:shadow">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-white mb-1 text-xs font-semibold">
                                Overview
                            </h6>
                            <h2 className="text-white text-xl font-semibold">
                                Sales value
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-[350px]">
                        <Line data={data} options={option} />
                    </div>
                </div>
            </div>
        </>
    );
}