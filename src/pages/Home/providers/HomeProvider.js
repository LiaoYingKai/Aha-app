import React, { createContext, useCallback, useContext, useMemo } from "react";

import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useDebounce, useSetState } from "react-use";

import { getResult } from "../../../apis/home";

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
        return lastPage.page + 1 < lastPage.totalPages ? lastPage.page + 1 : undefined;
      },
    }
  );

  const listData = useMemo(() => {
    return (
      data?.pages?.reduce((acc, item) => {
        acc.push(...item.data);
        return acc;
      }, []) || []
    );
  }, [data]);

  const pages = useMemo(() => {
    const defaultPages = {
      total: 0,
      totalPages: 0,
      page: 0,
      pageSize: 0,
    };
    if (!data) return defaultPages;
    defaultPages.total = data.pages[0].total;
    defaultPages.totalPages = data.pages[0].totalPages;
    defaultPages.page = data.pages[0].page;
    defaultPages.pageSize = data.pages[0].pageSize;
    return defaultPages;
  }, [data]);

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
      data: listData,
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
    listData,
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
