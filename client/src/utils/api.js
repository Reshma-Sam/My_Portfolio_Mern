// src/utils/api.js or directly where you use axios
const BASE_URL = import.meta.env.PROD
  ? "https://my-portfolio-mern-e30v.onrender.com"
  : "http://localhost:5000";

  export default BASE_URL;
