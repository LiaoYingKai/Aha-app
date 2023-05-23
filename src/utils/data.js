export const getInfiniteData = (data) => {
  const _data = {
    list: [],
    pages: {
      total: 0,
      totalPages: 0,
      page: 0,
      pageSize: 0,
    },
  };

  if (!data) return _data;

  _data.list = data?.pages?.reduce((acc, item) => {
    acc.push(...item.data);
    return acc;
  }, []);
  _data.pages = {
    total: data.pages[0].total,
    totalPages: data.pages[0].totalPages,
    page: data.pages[0].page,
    pageSize: data.pages[0].pageSize,
  };

  return _data;
};
