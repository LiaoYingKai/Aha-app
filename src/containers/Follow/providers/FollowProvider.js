import React, { createContext, useContext, useMemo, useStaet, useState } from "react";

import { useQuery } from "react-query";

import { getFollower, getFollowing } from "../../../apis/follow";

const staleTime = 60000 * 1000;
const context = createContext(undefined);

export const TabOption = [
  {
    label: "Followers",
    value: "followers",
  },
  {
    label: "Following",
    value: "following",
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

  const followerQuery = useQuery(["follower"], getFollower, {
    staleTime,
  });

  const followingQuery = useQuery(["following"], getFollowing, {
    staleTime,
  });

  const contextData = useMemo(() => {
    return { currentTab, setCurrentTab, followerQuery, followingQuery };
  }, [currentTab, setCurrentTab, followerQuery, followingQuery]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
}
