import cx from "classnames";

import { ReactComponent as IconArrow } from "./icons/arrow.svg";
import { ReactComponent as IconTab } from "./icons/tab.svg";

const TypeEnum = {
  ARROW: "arrow",
  TAB: "tab",
};

const { ARROW, TAB } = TypeEnum;

const TypeMap = {
  [ARROW]: IconArrow,
  [TAB]: IconTab,
};

export default function Icon({ type, className }) {
  if (!TypeMap[type]) return null;

  const Component = TypeMap[type];

  return (
    <div className={cx("inline-flex", className)}>
      <Component />
    </div>
  );
}

Icon.Type = TypeEnum;
