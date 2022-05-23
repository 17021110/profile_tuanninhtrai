import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "../components/Layout/CommonLayout";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <CommonLayout router={router}>
      <Component {...pageProps} key={router.route} />
    </CommonLayout>
  );
}

export default MyApp;