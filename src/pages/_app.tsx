import type { AppProps } from "next/app";
import "~/assets/css/index.css";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
