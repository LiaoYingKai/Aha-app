import http from "./index";

export const getFollower = ({ page = 1, pageSize = 10 } = {}) =>
  http({
    method: "GET",
    url: "users/all",
    params: {
      page,
      pageSize,
    },
  }).then((response) => response);

export const getFollowing = ({ page = 1, pageSize = 10 } = {}) =>
  http({
    method: "GET",
    url: "users/friends",
    params: {
      page,
      pageSize,
    },
  }).then((response) => response);
