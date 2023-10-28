import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0ee81abac8b4b239ef33a728361d3f3",
  },
});
