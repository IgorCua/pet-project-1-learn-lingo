import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

export const registerApi = (user) => {
    return axios.post('/users/register', user).then(res => res.data);
}

export const loginApi = (user) => {
    return axios.post('/users/login', user).then(res => res.data);
}

export const logoutApi = (user) => {
    return axios.post('/users/logout', user).then(res => res.data);
}

export const getTeachersListApi = (data) => {
    return axios.get('/teachers', {params: {id: data}}).then(res => res.data);
}
