import http from "./httpService";

export const addComment = (data, cookies) => {
  return http.post("/comment/add", data, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};


export const getAllComments = (cookies) => {
  return http.get("/comment/list", {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};
