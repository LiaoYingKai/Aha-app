import { useEffect, useMemo } from "react";

import Follower from "./components/Follower";
import Following from "./components/Following";
import Tabs from "./components/Tabs";

import { TabEnum, useFollow } from "./providers/FollowProvider";

export default function Follow() {
  const { currentTab, followerQuery, followingQuery } = useFollow();
  const isFollower = useMemo(() => currentTab === TabEnum.FOLLOWERS, [currentTab]);

  useEffect(() => {
    if (isFollower) {
      followerQuery.remove();
      followerQuery.refetch();
    } else {
      followingQuery.remove();
      followingQuery.refetch();
    }
  }, [isFollower]);

  return (
    <div className="scroll-hidden hidden h-full w-[375px] overflow-y-scroll bg-light-black pt-5 2xl:block">
      <Tabs />
      {isFollower ? <Follower /> : <Following />}
    </div>
  );
}
