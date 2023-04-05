import { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";
import DeviceTabletIcon from "@heroicons/react/24/outline/DeviceTabletIcon";
import DevicePhoneMobileIcon from "@heroicons/react/24/outline/DevicePhoneMobileIcon";

export function DoughnutCard() {
    const data: ChartData<"doughnut"> = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
                borderWidth: 6,
                borderColor: "#FFFFFF",
                hoverBorderColor: "#FFFFFF",
            },
        ],
        labels: ["Desktop", "Tablet", "Mobile"],
    };

    const options: ChartOptions<"doughnut"> = {
        cutout: 80, // tamaño del hueco
        layout: { padding: 0 },
        maintainAspectRatio: false,
        responsive: true,
        backgroundColor: "blue",
        color: "white",
        // color: theme.palette.text.secondary,
        plugins: {
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.74)",
                borderColor: "white",
                borderWidth: 1,
                enabled: true,
                intersect: false,
                mode: "index",
                bodyColor: "white",
                footerColor: "red",
                titleColor: "yellow",
            },
        },
        // scales: {
        //     y: { // para que muestre lineas
        //         ticks: {},
        //     },
        // },
    };

    const devices = [
        {
            title: "Desktop",
            value: 63,
            icon: ComputerDesktopIcon,
            color: "text-[#3F51B5]",
        },
        {
            title: "Tablet",
            value: 15,
            icon: DeviceTabletIcon,
            color: "text-[#E53935]",
        },
        {
            title: "Mobile",
            value: 23,
            icon: DevicePhoneMobileIcon,
            color: "text-[#FB8C00]",
        },
    ];

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-paper-dark bg-paper-light  dark:shadow">
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
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className="flex justify-center pt-2">
                        {devices.map(({ color, icon: Icon, title, value }) => (
                            <div key={title} className="p-1  text-center">
                                <Icon className="w-4 h-4 mx-auto  dark:text-white" />
                                <p className={"text-white font-semibold"}>
                                    {title}
                                </p>
                                <p className={`text-2xl font-bold ${color}`}>
                                    {value}%
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
