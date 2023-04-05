import type { AppProps } from "next/app";
import { ThemeProvider } from "~/context/theme/theme.context";
import { SessionProvider } from "next-auth/react";
import "~/assets/css/index.css";
import { AuthProvider } from "~/services/auth/context/auth.context";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <AuthProvider>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AuthProvider>
        </SessionProvider>
    );
}
