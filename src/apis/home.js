import http from "./index";

export const getResult = ({ page, pageSize = 10, keyword = "" } = {}) =>
  http({
    method: "GET",
    url: "users/all",
    params: {
      page,
      pageSize,
      keyword,
    },
  }).then((response) => response);
