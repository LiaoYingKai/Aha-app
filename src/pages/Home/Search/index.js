import { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useSetState } from "react-use";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Slider from "../../../components/Slider";
import TitleBlock from "./components/TitleBlock";

export default function Search() {
  const [searchParams, setSearchParams] = useSetState({
    keyword: "",
    perPage: 9,
  });
  const navigate = useNavigate();

  const handleChangeKeyword = useCallback(
    (value) => {
      setSearchParams({
        keyword: value,
      });
    },
    [setSearchParams]
  );

  const handleChangePerPage = useCallback(
    (value) => {
      setSearchParams({
        perPage: value,
      });
    },
    [setSearchParams]
  );

  const handleSearch = useCallback(() => {
    navigate(`/result?keyword=${searchParams.keyword}&perPage=${searchParams.perPage}`);
  }, [navigate, searchParams]);

  return (
    <div className="mx-auto flex h-full w-full max-w-[720px] flex-col px-5 pb-6 pt-14 md:pb-20">
      <TitleBlock title="Search">
        <Input value={searchParams.keyword} onChange={handleChangeKeyword} placeholder="Keyword" />
      </TitleBlock>
      <TitleBlock title="# Of Results Per Page">
        <Slider value={searchParams.perPage} onChange={handleChangePerPage}></Slider>
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
