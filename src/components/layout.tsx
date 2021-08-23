import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="flex flex-col items-center py-6 mx-auto w-full h-screen bg-blue-200">
      <Header />
      <main className="px-20 text-center">{props.children}</main>
      <Footer />
      <p>Layout</p>
    </div>
  );
};
