import axios from "axios";

let Url = "https://rr-api.realisticrealtors.com/api/rr";

const postCall = (url, body, config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(Url + url, body, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) resolve(error.response.data);
      });
  });
};

const login = (params) => {
  return postCall("/user/login", params);
};
const signup = (params) => {
  return postCall("/user/signup", params);
};

const getUserFromToken = (token) => {
  return {}

}

export default {
  login,
  signup,
  getUserFromToken
};
