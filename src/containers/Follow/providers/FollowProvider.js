import React, { createContext, useContext, useMemo, useState } from "react";

import { useInfiniteQuery } from "react-query";

import { getFollower, getFollowing } from "../../../apis/follow";

const context = createContext(undefined);

export const TabEnum = {
  FOLLOWERS: "followers",
  FOLLOWING: "following",
};

export const TabOption = [
  {
    label: "Followers",
    value: TabEnum.FOLLOWERS,
  },
  {
    label: "Following",
    value: TabEnum.FOLLOWING,
  },
];

export function useFollow() {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useFollow must be used within a FollowProvider");
  }

  return contextData;
}

export function FollowProvider({ children }) {
  const [currentTab, setCurrentTab] = useState(TabOption[0].value);

  const followerQuery = useInfiniteQuery(["follower"], ({ pageParam = 1 }) => getFollower({ page: pageParam, pageSize: 10 }), {
    enabled: false,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1 <= lastPage.totalPages ? lastPage.page + 1 : undefined;
    },
  });

  const followingQuery = useInfiniteQuery(["following"], ({ pageParam = 1 }) => getFollowing({ page: pageParam, pageSize: 10 }), {
    enabled: false,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1 <= lastPage.totalPages ? lastPage.page + 1 : undefined;
    },
  });

  const contextData = useMemo(() => {
    return { currentTab, setCurrentTab, followerQuery, followingQuery };
  }, [currentTab, setCurrentTab, followerQuery, followingQuery]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
}
