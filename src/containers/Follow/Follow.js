import { useCallback, useMemo } from "react";

import FollowItem from "./components/FollowItem";
import FollowLoadingItem from "./components/FollowLoadingItem";
import Tabs from "./components/Tabs";

import { useFollow } from "./providers/FollowProvider";

export default function Follow() {
  const { followerQuery, followingQuery, currentTab } = useFollow();
  const data = useMemo(() => {
    if (followerQuery.isLoading || followingQuery.isLoading) {
      return new Array(10).fill(true);
    }
    if (currentTab === "followers") {
      return followerQuery.data.data;
    } else {
      return followingQuery.data.data;
    }
  }, [currentTab, followerQuery, followingQuery]);

  const renderContent = useCallback(() => {
    if (followerQuery.isLoading || followingQuery.isLoading) {
      return data.map((_, index) => <FollowLoadingItem key={index} />);
    }
    return data.map((item) => <FollowItem key={item.id} {...item} />);
  }, [data, followerQuery, followingQuery]);

  return (
    <div className="scroll-hidden hidden h-full w-[375px] overflow-y-scroll bg-light-black pt-5 2xl:block">
      <Tabs />
      <div className="px-4">{renderContent()}</div>
    </div>
  );
}
