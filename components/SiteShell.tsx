import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

/**
 * Standard page shell: Nav + main + Footer. Use on every page so the
 * sticky header and dark footer are consistent.
 */
export default function SiteShell({ children }: Props) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
