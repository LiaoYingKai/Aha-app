export const getResult = ({ pageSize = 10, keyword = "" } = {}) =>
  fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keyword}`).then((res) => res.json());
