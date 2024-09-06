import axios from "axios";




const baseURL = 'http://localhost:9091';



export const userApi = {
    registerUser,
    // sendEmail,
    // AddRole,
    // assignRole,
    // resetPassword,
    loginUser,
    refreshToken,
}


export function registerUser(user) {
    return instance.post(`/api/v1/cowork/users/register`, user, {
        // headers: {'Authorization': `Bearer ${token}`}
    });
}


export function loginUser(username, password) {
    return instance.post(`/api/v1/cowork/users/login`, new URLSearchParams({
        client_id: 'COWORK',
        grant_type: 'password',
        username: username,
        password: password
    }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
}

function refreshToken(refreshToken) {
    return instance.post(`/api/v1/users/refresh-token`, new URLSearchParams({
        client_id: 'COWORK',
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
}


const instance = axios.create({
    baseURL: baseURL
})

instance.interceptors.response.use(response => {
    return response
}, function(error){
    if(error.response.status === 404){
        return{status: error.response.status}
    }
    return Promise.reject(error.response)
    })

 function bearerAuth(token){
    return `Bearer ${token}`
 }