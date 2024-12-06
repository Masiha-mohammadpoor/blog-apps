import http from "./httpService";

export const addComment = (data, cookies) => {
  return http.post("/comment/add", data, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};
