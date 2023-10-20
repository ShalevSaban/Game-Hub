import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d1e8c63e81c4c2d9b69e7a775b7a78a",
  },
});
