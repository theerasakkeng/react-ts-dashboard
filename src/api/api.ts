import axios from "axios";

const CUSTOMER_URL = import.meta.env.VITE_API_CUSTOMER_ENDPOINT;

const Api = {
  GetCustommer: (page: number) => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .get(`${CUSTOMER_URL}/api/users?page=${page}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  },
};
export default Api;
