import { useCallback } from "react";

import cx from "classnames";

import { TabOption, useFollow } from "../providers/FollowProvider";

export default function Tabs() {
  const { currentTab, setCurrentTab } = useFollow();

  const handleChangeTab = useCallback(
    (value) => {
      setCurrentTab(value);
    },
    [setCurrentTab]
  );

  return (
    <div className="flex w-full">
      {TabOption.map((tab) => (
        <button
          onClick={() => {
            handleChangeTab(tab.value);
          }}
          className={cx("mb-8 flex-1 border-b-2 border-solid border-transparent py-3 font-bold", {
            "border-white": currentTab === tab.value,
            "text-text-gray": currentTab !== tab.value,
          })}
          key={tab.value}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
