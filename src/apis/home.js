export const getResult = ({ page, pageSize = 10, keyword = "" } = {}) =>
  fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`).then((res) => res.json());
