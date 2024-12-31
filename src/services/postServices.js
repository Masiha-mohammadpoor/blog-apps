import http from "./httpService";


export const getAllPosts = (query="" , cookies) => {

  return http.get(`/post/list?${query}` , {
    headers : {
      Cookie: cookies
    }
  }).then(({ data }) => data.data);
};


export const getSinglePost = (slug) => {
  return http.get(`/post/slug/${slug}`).then(({ data }) => data.data);
};

export const getPostById = (id) => {
  return http.get(`/post/${id}`).then(({ data }) => data.data);
};

export const likePost = (id) => {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
};


export const bookmarkPost = (id) => {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};

export const createPostApi = (data) => {
  return http.post(`/post/create` , data).then(({ data }) => data.data);
};

export const editpostApi = ({id,data}) => {
  return http.patch(`/post/update/${id}` , data).then(({ data }) => data.data);
};

export const deletePostApi = (id) => {
  return http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
};
