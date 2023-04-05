import Head from "next/head";
import { AdminHeader } from "~/components/headers/Admin.header";
import { AdminSidebar } from "~/components/sidebars/Admin.sidebar";
type AdminLayoutProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};
export function AdminLayout({ title = "", children }: AdminLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AdminSidebar />
            <div className="relative md:ml-64 ">
                <AdminHeader />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {/* Outlet  */}
                    {children}
                    {/* fin Outlet  */}
                    {/* <footers /> */}
                </div>
            </div>
        </>
    );
}
