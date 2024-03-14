import axios from "axios";

let Url = "https://rr-api.realisticrealtors.com/api/rr";

const getCall = (url, config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(Url + url, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) resolve(error.response.data);
      });
  });
};

const getRewardsList = (params) => {
  return getCall("/category/awards", params);
};

export default getRewardsList;
