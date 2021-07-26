import Head from "next/head";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <Head>
      <title>Next.js Starter Template</title>
      <meta
        name="description"
        content="This is Next.js Starter Template by kijikunnn"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
