import React, { createContext, useContext, useMemo } from "react";

import { useQuery } from "react-query";

import { getTags } from "../../../apis/tags";

const context = createContext(undefined);

export function useTags() {
  const contextData = useContext(context);

  if (contextData === undefined) {
    throw new Error("useTags must be used within a TagsProvider");
  }

  return contextData;
}

export function TagsProvider({ children }) {
  const { data, isLoading, isError } = useQuery(["tags"], getTags);

  const contextData = useMemo(() => {
    return { data, isLoading, isError };
  }, [data, isLoading, isError]);

  return <context.Provider value={contextData}>{children}</context.Provider>;
}
