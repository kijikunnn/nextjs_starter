import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <Header />
      <main className="flex flex-col flex-1 justify-center items-center px-20 w-full text-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
