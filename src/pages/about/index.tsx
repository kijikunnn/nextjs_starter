import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-600">About Page</h1>
      <Link href="/">
        <a className="hover:text-blue-600">Index page &#8811;</a>
      </Link>
    </Layout>
  );
};

export default About;
