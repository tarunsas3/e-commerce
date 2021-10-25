import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TokenPresent = false;
let TOKEN = "";

const TOKEN_BASE = JSON.parse(
  JSON.parse(localStorage.getItem("persist: root"))
);

if (typeof TOKEN_BASE === null) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist: root")));
  TokenPresent = true;
}

if (TokenPresent) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist: root")).user)
    .currentUser?.accessToken;
  console.log(
    JSON.parse(JSON.parse(localStorage.getItem("persist: root")).user)
      .currentUser?.accessToken
  );
}

//console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
