import Image from "next/image";
import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer>
      Powered by{" "}
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </footer>
  );
};
