import http from "./httpService";


export const getAllCategories = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};

export const deleteCategoryApi = (id) => {
  return http.delete(`/category/remove/${id}`).then(({ data }) => data.data);
};
