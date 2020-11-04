import Head from "next/head";
import { Header } from "./Header";

export function Layout({ children, title = "Default title" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      {children}

      <footer>{"Footer"}</footer>
    </div>
  );
}
