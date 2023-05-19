export const getFollower = () => fetch("https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10").then((res) => res.json());
export const getFollowing = () => fetch("https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10").then((res) => res.json());
