import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

export const registerApi = (user) => {
    return axios.post('/users/register', user).then(res => res.data);
}

export const loginApi = (user) => {
    return axios.post('/users/login', user).then(res => {
        return res.data;
    });
}

// export const logoutApi = (user) => {
//     return axios.post('/users/logout', user).then(res => {
//         return res.data;
//     });
// }

export const getFilteredTeachersListApi = (data) => {
    return axios.get('/teachers/filter', {params: data}).then((res) => {
        return res.data;
    })
}

export const getTeachersListApi = (data) => {
    return axios.get('/teachers', {params: {id: data}}).then(res => res.data);
}

export const getFavoriteTeachersListApi = (data) => {
    return axios.get('/users/favorites', {params: {userID: data}}).then((res) => {
        return res.data;
    })
}

export const updateFavoritesApi = (data) => {
    return axios.post('/users/favorites/update-list', data).then((res) => {
        return res.data;
    })
}