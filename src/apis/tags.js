import http from "./index";

export const getTags = () =>
  http({
    method: "GET",
    url: "tags",
  }).then((response) => response);
