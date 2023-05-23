import React, { createContext, useCallback, useContext, useMemo } from "react";

import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useDebounce, useSetState } from "react-use";

import { getResult } from "../../../apis/home";

import { getInfiniteData } from "../../../utils/data";

const context = createContext(undefined);

export function useHome() {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }

  return contextData;
}

export function HomeProvider({ children }) {
  const [queryString] = useSearchParams();

  const { perPage = 9, keyword = "" } = useMemo(() => {
    const data = {};
    for (const entry of queryString.entries()) {
      const [key, value] = entry;
      data[key] = value;
    }
    return data;
  }, [queryString]);
  const [searchParams, setSearchParams] = useSetState({
    keyword,
    perPage,
  });

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

  const { data, isLoading, isError, hasNextPage, isFetchingNextPage, fetchNextPage, refetch, remove } = useInfiniteQuery(
    ["result"],
    ({ pageParam = 1 }) => getResult({ page: pageParam, pageSize: searchParams.perPage, keyword: searchParams.keyword }),
    {
      enabled: false,
      getNextPageParam: (lastPage) => {
        return lastPage.page + 1 <= lastPage.totalPages ? lastPage.page + 1 : undefined;
      },
    }
  );

  const { list, pages } = useMemo(() => getInfiniteData(data), [data]);
  const [isReady] = useDebounce(
    () => {
      remove();
      refetch();
    },
    500,
    [searchParams]
  );

  const contextData = useMemo(() => {
    return {
      isReady: isReady(),
      data: list,
      pages: pages,
      isLoading,
      isFetchingNextPage,
      isError,
      searchParams,
      handleChangeKeyword,
      handleChangePerPage,
      hasNextPage,
      fetchNextPage,
    };
  }, [
    isReady,
    list,
    pages,
    isLoading,
    isFetchingNextPage,
    isError,
    searchParams,
    handleChangeKeyword,
    handleChangePerPage,
    hasNextPage,
    fetchNextPage,
  ]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
}
