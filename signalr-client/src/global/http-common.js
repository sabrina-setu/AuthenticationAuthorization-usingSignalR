import axios from "axios";

const server = "https://localhost:44375";

const http = axios.create({
    baseURL: `${server}/api`,
});
// const http = axios.create({
//   baseURL: "https://localhost:44375/api",
// });

// http.interceptors.response.use(
//     (fulFilled) => {
//         return fulFilled;
//     },
//     (error) => {
//         console.debug(error);
//         //showError(error.response.data)
//     }
// );

// http.interceptors.request.use((config) => {
//     config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//         "authToken"
//     )}`;
//     return config;
// });

export default http;

export const CHAT_HUB_URL = `${server}/chat`;
export const UserOnline_HUB_URL = `${server}/userOnline`;
