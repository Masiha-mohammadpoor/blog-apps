import http from "./httpService";


export const getAllPosts = (cookies) => {
  return http.get("/post/list" , {
    headers : {
      Cookie: cookies
    }
  }).then(({ data }) => data.data);
};


export const getSinglePost = (slug) => {
  return http.get(`/post/slug/${slug}`).then(({ data }) => data.data);
};

export const likePost = (id) => {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
};


export const bookmarkPost = (id) => {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};
