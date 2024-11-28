import http from "./httpService";

export const signupUser = (value) => {
  return http.post("/user/signup" , value).then(({ data }) => data.data);
};

export const signinUser = (value) => {
  return http.post("/user/signin" , value).then(({ data }) => data.data);
};

