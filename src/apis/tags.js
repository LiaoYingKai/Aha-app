export const getTags = () =>
  fetch("https://avl-frontend-exam.herokuapp.com/api/tags").then((res) =>
    res.json()
  );
