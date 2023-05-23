import { useCallback, useMemo } from "react";

import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import LoadingItem from "../../../components/LoadingItem";
import ResultContainer from "./components/ResultContainer";
import ResultItem from "./components/ResultItem";

import { useHome } from "../providers/HomeProvider";

import { getArray } from "../../../utils/array";

import { ReactComponent as IconArrow } from "../../../images/arrow.svg";

const skeletonCount = 6;

export default function Results() {
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage, hasNextPage } = useHome();
  const skeletons = useMemo(() => getArray(skeletonCount), []);

  const renderContent = useCallback(() => {
    if (isError) {
      return (
        <div>
          <p className="mb-1.5 text-2xl">Something Error.</p>
          <p>Please try again later.</p>
        </div>
      );
    }

    return (
      <ResultContainer>
        {data.map(({ id, ...params }) => (
          <ResultItem key={id} {...params}></ResultItem>
        ))}
        {(isLoading || isFetchingNextPage) && skeletons.map((_, index) => <LoadingItem key={index} className="max-w-[210px]" />)}
      </ResultContainer>
    );
  }, [skeletons, isLoading, isFetchingNextPage, isError, data]);

  return (
    <div className="relative mx-auto mt-5 flex w-full max-w-[720px] flex-col px-5 pb-5 md:mt-20">
      <Link className="absolute -left-8 top-2 hidden md:block" to="/">
        <IconArrow />
      </Link>
      <h1 className="mb-6 text-2xl tracking-[.25px] md:text-3xl">Results</h1>
      <div className="mb-10 flex-1">{renderContent()}</div>
      {hasNextPage && (
        <div>
          <Button onClick={fetchNextPage}>More</Button>
        </div>
      )}
    </div>
  );
}
