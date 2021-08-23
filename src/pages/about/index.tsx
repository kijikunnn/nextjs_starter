/* eslint-disable react/display-name */
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { SubLayout } from "src/components/SubLayout";

const About: NextPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600">About Page</h1>
      <Link href="/">
        <a className="hover:text-blue-600">Index page &#8811;</a>
      </Link>
    </>
  );
};

About.getLayout = (page: ReactElement) => {
  return <SubLayout>{page}</SubLayout>;
};

export default About;
