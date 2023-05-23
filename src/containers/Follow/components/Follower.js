import { useEffect, useMemo } from "react";

import Button from "../../../components/Button";

import { useFollow } from "../providers/FollowProvider";

import { getArray } from "../../../utils/array";
import { getInfiniteData } from "../../../utils/data";

import FollowItem from "./FollowItem";
import FollowLoadingItem from "./FollowLoadingItem";

export default function Follower() {
  const { followerQuery } = useFollow();
  const { list } = useMemo(() => getInfiniteData(followerQuery.data), [followerQuery.data]);
  const skeletons = useMemo(() => getArray(), []);

  useEffect(() => {
    followerQuery.remove();
    followerQuery.refetch()
  }, [])

  if (followerQuery.isError) {
    return (
      <div>
        <p className="mb-1.5 text-2xl">Something Error.</p>
        <p>Please try again later.</p>
      </div>
    );
  }


  return (
    <div className="px-4 pb-5">
      {list.map((item) => (
        <FollowItem key={item.id} {...item} />
      ))}
      {(followerQuery.isLoading || followerQuery.isFetchingNextPage) && skeletons.map((_, index) => <FollowLoadingItem key={index} />)}
      {followerQuery.hasNextPage && (
        <div className="mt-5">
          <Button onClick={followerQuery.fetchNextPage}>More</Button>
        </div>
      )}
    </div>
  );
}
