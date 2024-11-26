import http from "./httpService";


export const getAllPosts = () => {
  return http.get("/post/list").then(({ data }) => data.data);
};


export const getSinglePost = (slug) => {
  return http.get(`/post/slug/${slug}`).then(({ data }) => data.data);
};
