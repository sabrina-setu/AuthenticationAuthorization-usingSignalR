import http from "../global/http-common";

const route = "/Auth";

export const authService = {
    signin: function (data) {
        return http.post(route + "/Signin", data);
    },

    signup: function (data) {
        //console.debug(data)
        return http.post(route + "/Signup", data);
    },

    signout: function () {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
    },
};
