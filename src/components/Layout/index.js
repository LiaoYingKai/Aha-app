import { useMemo } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import useMobileHook from "../../hooks/useMobileHook";

import { ReactComponent as IconArrow } from "../../images/arrow.svg";
import Nav from "../Nav";

export default function Layout({ children }) {
  const isMobile = useMobileHook();
  const location = useLocation();
  const isHiddenNav = useMemo(() => isMobile && location.pathname !== "/", [isMobile, location.pathname]);
  return (
    <main className="flex h-full w-full flex-col bg-black md:flex-row">
      <Nav isHiddenNav={isHiddenNav}></Nav>
      {isHiddenNav && (
        <Link className="flex h-[70px] w-full items-center gap-5 px-6 md:hidden" to="/">
          <IconArrow />
          <p className="text-2xl leading-9 ">Home page</p>
        </Link>
      )}

      <section className="scroll-hidden order-1 flex-1 overflow-y-scroll md:order-2">{children}</section>
    </main>
  );
}
