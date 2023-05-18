import cx from "classnames";
import Logo from "../../images/logo.png";
import {ReactComponent as IconTab} from "../../images/tab.svg";
import {NavLink} from "react-router-dom";
import {useMemo} from "react";

export default function Nav() {
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
    <nav className="order-2 flex h-16 w-full flex-row items-center justify-center gap-10 md:gap-0 bg-light-black text-white md:order-1 md:h-full md:w-20 md:flex-col md:justify-start md:pt-9">
      <img className="mb-10 hidden md:block" src={Logo} alt="logo"></img>
      {links.map((link) => (
        <NavLink to={link.to} key={link.name}>
          {({isActive}) => (
            <div
              className={cx("md:mb-5 text-center hover:text-white", {
                "text-white": isActive,
                "text-light-gray": !isActive,
              })}
            >
              <IconTab className="inline-block" />
              <p className={cx("hidden md:block capitalize",{visible: isActive, invisible: !isActive})}>
                {link.name}
              </p>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
