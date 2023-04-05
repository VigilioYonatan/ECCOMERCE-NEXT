import Head from "next/head";
import { WebFooter } from "~/components/footers/Web.footer";
import { WebHeader } from "~/components/headers/Web.header";

type WebLayoutProps = { titulo: string; children: JSX.Element | JSX.Element[] };
export function WebLayout({ titulo, children }: WebLayoutProps) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{`${titulo} - Eccomerce`} </title>
            </Head>
            <WebHeader />
            {children}
            <WebFooter />
        </>
    );
}
