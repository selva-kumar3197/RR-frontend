import axios from "axios";
import baseURL from "./Url";

const postData = async (Endpoint, data) => {
  return axios
    .post(baseURL + Endpoint, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getData = (Endpoint) => {
  return axios
    .get(baseURL + Endpoint)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  postData,
  getData,
};
