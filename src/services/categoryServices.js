import http from "./httpService";


export const getAllCategories = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};
