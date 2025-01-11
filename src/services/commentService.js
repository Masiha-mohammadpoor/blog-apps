import http from "./httpService";

export const addComment = (data, cookies) => {
  return http.post("/comment/add", data, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};


export const getAllComments = (query="",cookies="") => {
  return http.get(`comment/list?=${query}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};

export const deleteCommentApi = (id) => {
  return http.delete(`/comment/remove/${id}`).then(({ data }) => data.data);
};

