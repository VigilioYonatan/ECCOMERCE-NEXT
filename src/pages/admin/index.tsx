import { BarChartCard } from "~/components/cards/BarChart.card";
import { LineCard } from "~/components/cards/CardLine.card";
import { DoughnutCard } from "~/components/cards/Doughnut.card";
import { PageVisitsCard } from "~/components/cards/PageVisits.card";
import { SocialTrafficCard } from "~/components/cards/SocialTraffic.card";
import { TableCard } from "~/components/cards/Table.card";
import { AdminLayout } from "~/layouts/Admin.layout";

const DashboardPage = () => {
    return (
        <AdminLayout title="Dashboard">
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <LineCard />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <BarChartCard />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <PageVisitsCard />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <SocialTrafficCard />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
                    <DoughnutCard />
                </div>
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <TableCard />
                </div>
            </div>
        </AdminLayout>
    );
};
export default DashboardPage;
