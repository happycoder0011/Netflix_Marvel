import axios from "axios";

const instance = axios.create(
{
  baseURL: "https://gateway.marvel.com",
})

export default instance;

 