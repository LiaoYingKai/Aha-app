import {useCallback} from "react";
import {useTags} from "./providers/TagsProvider";
import LoadingItem from "../../components/LoadingItem";
import TagContainer from "./components/TagContainer";
import Tag from "./components/Tag";
const skeletonCount = 10;
const skeletons = new Array(skeletonCount).fill(true);

export default function Tags() {
  const {data, isLoading, isError} = useTags();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <TagContainer>
          {skeletons.map((_, index) => (
            <LoadingItem key={index} />
          ))}
        </TagContainer>
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
      <TagContainer>
        {data.map(({id, name, count}) => (
          <Tag key={id} name={name} count={count} />
        ))}
      </TagContainer>
    );
  }, [isLoading, isError, data]);

  return (
    <div className="mx-auto mt-20 w-full max-w-[890px] px-5 text-white pb-5">
      <h1 className="mb-6 text-3xl tracking-[.25px]">Tags</h1>
      {renderContent()}
    </div>
  );
}