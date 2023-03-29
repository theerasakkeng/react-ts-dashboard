import axios from "axios";

const CUSTOMER_URL = import.meta.env.VITE_API_CUSTOMER_ENDPOINT;
const COVID_URL = import.meta.env.VITE_API_COVID_ENDPOINT;
const PRODUCT = import.meta.env.VITE_API_PRODUCT_ENDPOINT;

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
  GetCovidDataProvices: () => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .get(`${COVID_URL}/api/Cases/today-cases-by-provinces`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  },
  GetCovidDataAll: () => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .get(`${COVID_URL}/api/Cases/today-cases-all`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  },
  GetProduct: () => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .get(`${PRODUCT}/products`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  },
  GetSalt: (user_name: string) => {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .get("http://localhost:3000/api/Authen/Getsalt", {
          params: {
            user_name: user_name,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  },
  Login: (user_name: string, password: string) => {
    return new Promise((resolve, reject) => {
      let data = {
        user_name: user_name,
        password: password,
      };
      axios.defaults.headers.common["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios
        .post("http://localhost:3000/api/Authen/Login", data)
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
