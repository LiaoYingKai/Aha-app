import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Slider from "../../../components/Slider";
import TitleBlock from "./components/TitleBlock";

import { useHome } from "../providers/HomeProvider";

export default function Search() {
  const { pages, searchParams, handleChangeKeyword, handleChangePerPage, isReady } = useHome();
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    navigate(`/result?keyword=${searchParams.keyword}&perPage=${searchParams.perPage}`);
  }, [navigate, searchParams]);

  return (
    <div className="mx-auto flex h-full w-full max-w-[720px] flex-col px-5 pb-6 pt-14 md:pb-20">
      <TitleBlock title="Search">
        <Input value={searchParams.keyword} onChange={handleChangeKeyword} placeholder="Keyword" />
      </TitleBlock>
      <TitleBlock title="# Of Results Per Page">
        <Slider value={searchParams.perPage} onChange={handleChangePerPage}>
          {isReady ? (
            <p className="text-5xl leading-[72px]">
              {pages.total} <span className="text-base">results</span>
            </p>
          ) : (
            <div className="flex h-[72px] animate-pulse items-end">
              <div className="flex h-full w-10 items-center">
                <div className="h-2 w-full  bg-slate-700"></div>
              </div>
              <span className="text-base">results</span>
            </div>
          )}
        </Slider>
      </TitleBlock>
      <div className="flex flex-1 flex-col justify-end">
        <hr className="border-t-1 mb-20 block border-solid border-white border-opacity-10 md:hidden"></hr>
        <Button onClick={handleSearch} size={Button.ButtonSize.LARGE} type={Button.ButtonType.CONTAINED}>
          SEARCH
        </Button>
      </div>
    </div>
  );
}
