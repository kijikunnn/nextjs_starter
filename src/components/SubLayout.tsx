import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const SubLayout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="flex flex-col items-center py-6 mx-auto w-2/3 h-screen bg-[#ffbbff]">
      <Header />
      <main className=" px-20 text-center">{props.children}</main>
      <Footer />
      <p> SubLayout</p>
    </div>
  );
};
