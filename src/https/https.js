import Axios from "@/https/aixos";
const BASE_URL = "http://192.168.0.79:9090/panjiajie";
// const BASE_URL = "localhost:9090/panjiajie";

const request = async (url = "", param = {}) => {
  return await Axios.request({
    url: `${BASE_URL}${url}`,
    method: "get",
    data: param,
  });
};

export default request;
