import { useMemo } from "react";

import cx from "classnames";
import { NavLink } from "react-router-dom";

import Logo from "../../images/logo.png";
import { ReactComponent as IconTab } from "../../images/tab.svg";

export default function Nav({ isHiddenNav }) {
  const links = useMemo(
    () => [
      {
        name: "home",
        to: "/",
      },
      {
        name: "tags",
        to: "/tags",
      },
    ],
    []
  );

  return (
    <nav
      className={cx(
        "order-2 flex h-16 w-full flex-row items-center justify-center gap-10 bg-light-black md:order-1 md:h-full md:w-20 md:flex-col md:justify-start md:gap-0 md:pt-9",
        { hidden: isHiddenNav }
      )}
    >
      <img className="mb-10 hidden md:block" src={Logo} alt="logo"></img>
      {links.map((link) => (
        <NavLink to={link.to} key={link.name}>
          {({ isActive }) => (
            <div
              className={cx("text-center hover:text-white md:mb-5", {
                "text-white": isActive,
                "text-light-gray": !isActive,
              })}
            >
              <IconTab className="inline-block" />
              <p
                className={cx("hidden capitalize md:block", {
                  visible: isActive,
                  invisible: !isActive,
                })}
              >
                {link.name}
              </p>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
