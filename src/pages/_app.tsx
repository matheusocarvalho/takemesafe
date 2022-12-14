import "../styles/globals.scss";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MantineProvider theme={theme} withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </Layout>
  );
}
