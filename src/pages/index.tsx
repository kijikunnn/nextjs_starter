import type { NextPage } from "next";
import { Layout } from "src/components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-600">
        This is Next.js Starter Template
      </h1>
    </Layout>
  );
};

export default Home;
