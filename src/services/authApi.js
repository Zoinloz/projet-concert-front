import axios from 'axios';
import jwtDecode from 'jwt-decode';

function logout() {
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers["Authorization"];
}

function auth(credentials) {
    return axios
        .post("http://localhost:8000/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem('authToken', token);
            console.log(token);
            _setAxiosToken(token);

            return true;
        });
}

function init() {
    const token = window.localStorage.getItem('authToken');
    if (token) {
        const jwtData = jwtDecode(token);

        if (jwtData.exp * 1000 > new Date().getTime()) {
            _setAxiosToken(token);
        }
    }
}

// function isAuth() {
//     const token = window.localStorage.getItem('authToken');
//     if (token) {
//         const jwtData = jwtDecode(token);

//         if (jwtData.exp * 1000 > new Date().getTime()) {
//             return true
//         }
//         return false
//     }
//     return false
// }

function isAuth() {
    const token = window.localStorage.getItem('authToken');
    if (token) {
        const jwtData = jwtDecode(token);

        if (jwtData.exp * 1000 > new Date().getTime()) {
            return true
        } else {
            this.logout()
        }
        return false
    }
    return false
}

function isAdmin() {
    if (isAuth) {
        const token = window.localStorage.getItem('authToken');
        const jwtData = jwtDecode(token);
        if (jwtData.roles.find((element) => element === 'ROLE_ADMIN')) {
            return true;
        }
        return false;
    }

    return false;
}



function _setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

export default {
    auth,
    logout,
    init,
    isAuth,
    isAdmin
}