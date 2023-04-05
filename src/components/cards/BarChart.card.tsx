import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

export function BarChartCard() {
    const data: ChartData<"bar"> = {
        datasets: [
            {
                label: String(new Date().getFullYear()),
                backgroundColor: "#ed64a6",
                borderColor: "#ed64a6",
                data: [30, 78, 56, 34, 100, 45, 13],
                barThickness: 8,
                barPercentage: 0.5,
                borderRadius: 2,
                categoryPercentage: 0.2,
            },
            {
                label: String(new Date().getFullYear()),
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [27, 68, 86, 74, 10, 4, 87],
                barThickness: 8,
                barPercentage: 1,
                borderRadius: 2,
                categoryPercentage: 0.4,
            },
        ],
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
    };
    const options: ChartOptions<"bar"> = {
        maintainAspectRatio: false,
        responsive: true,

        hover: {
            mode: "nearest",
            intersect: true,
        },

        plugins: {
            legend: {
                labels: {
                    color: `${true ? "#fff" : "#000"}`,
                },
                align: "end",
                position: "bottom",
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
            title: {
                display: false,
                text: "Orders Chart",
                color: "#fff",
            },
        },
        scales: {
            x: {
                display: false,
                title: { text: "Order Charts" },
                grid: {
                    // borderDash: [2],
                    tickBorderDashOffset: 2,
                    color: `${true ? "#fff" : "rgba(33, 37, 41, 0.2)"} `,

                    tickColor: `${true ? "#fff" : "rgba(33, 37, 41, 0.2)"} `,
                    tickBorderDash: [2],
                    // borderDashOffset: 2,
                },
            },
            y: {
                display: true,
                grid: {
                    // borderDash: [2],
                    // drawBorder: false,
                    tickBorderDashOffset: 2,
                    color: `${true ? "#8f8888" : "rgba(33, 37, 41, 0.2)"} `,
                    tickColor: `${true ? "#968e8e" : "rgba(33, 37, 41, 0.2)"} `,
                    tickBorderDash: [2],
                    // borderDashOffset: 2,
                },
            },
        },
    };
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-paper-dark w-full mb-6 shadow-lg rounded dark:shadow-gray dark:shadow">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="text-primary uppercase dark:text-primary mb-1 text-xs font-semibold">
                                Performance
                            </h6>
                            <h2 className="dark:text-paper-light text-xl font-semibold">
                                Total orders
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-[350px]">
                        <Bar data={data} options={options}></Bar>
                    </div>
                </div>
            </div>
        </>
    );
}
