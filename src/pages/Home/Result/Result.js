import { useCallback } from "react";

import { Link } from "react-router-dom";

import LoadingItem from "../../../components/LoadingItem";
import ResultContainer from "./components/ResultContainer";
import ResultItem from "./components/ResultItem";

import { useResult } from "./providers/ResultProvider";

import { ReactComponent as IconArrow } from "../../../images/arrow.svg";

const skeletonCount = 6;
const skeletons = new Array(skeletonCount).fill(true);

export default function Results() {
  const { data, isLoading, isError } = useResult();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <ResultContainer>
          {skeletons.map((_, index) => (
            <LoadingItem key={index} className="max-w-[210px]" />
          ))}
        </ResultContainer>
      );
    }

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
      </ResultContainer>
    );
  }, [isLoading, isError, data]);

  return (
    <div className="relative mx-auto mt-5 w-full max-w-[720px] px-5 pb-5 md:mt-20">
      <Link className="absolute -left-8 top-2 hidden md:block" to="/">
        <IconArrow />
      </Link>
      <h1 className="mb-6 text-2xl tracking-[.25px] md:text-3xl">Results</h1>

      {renderContent()}
    </div>
  );
}
