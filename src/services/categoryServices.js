import http from "./httpService";


export const getAllCategories = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};

export const deleteCategoryApi = (id) => {
  return http.delete(`/category/remove/${id}`).then(({ data }) => data.data);
};

export const createCategoryApi = (data) => {
  // console.log(data)
  return http.post(`/category/add` , data).then(({ data }) => data.data);
};

export const editCategoryApi = ({id,data}) => {
  return http.patch(`/category/update/${id}` , data).then(({ data }) => data.data);
};
