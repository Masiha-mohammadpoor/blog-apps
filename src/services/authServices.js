import http from "./httpService";

export const signupUser = (value) => {
  return http.post("/user/signup" , value).then(({ data }) => data.data);
};

export const signinUser = (value) => {
  return http.post("/user/signin" , value).then(({ data }) => data.data);
};

export const getUserApi = () => {
  return http.get("/user/profile").then(({ data }) => data.data);
};

export const getAllUsers = (cookies) => {
  return http.get("/user/list", {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
};

export const logoutUser = () => {
  return http.post("/user/logout").then(({ data }) => data.data);
};