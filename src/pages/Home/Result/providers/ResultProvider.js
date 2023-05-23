import React, { createContext, useContext, useMemo } from "react";

import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import { getResult } from "../../../../apis/result";

const context = createContext(undefined);

export function useResult() {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useResult must be used within a ResultProvider");
  }

  return contextData;
}

export function ResultProvider({ children }) {
  const [searchParams] = useSearchParams();
  const { perPage = 10, keyword } = useMemo(() => {
    const data = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      data[key] = value;
    }
    return data;
  }, [searchParams]);

  const { data, isLoading, isError } = useQuery(["results"], () => getResult({ pageSize: perPage, keyword }));

  const contextData = useMemo(() => {
    return {
      data: data?.data || [],
      pages: {
        total: data?.total || 0,
        totalPages: data?.totalPages || 0,
        page: data?.page || 0,
        pageSize: data?.pageSize || 0,
      },
      isLoading,
      isError,
    };
  }, [data, isLoading, isError]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
}
