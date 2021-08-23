/* eslint-disable react/display-name */
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { Layout } from "src/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <h1 className=" text-4xl font-bold text-blue-600">
        This is Next.js Starter Template
      </h1>
      <Link href="/about">
        <a className="hover:text-blue-600">about page &#8811;</a>
      </Link>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
