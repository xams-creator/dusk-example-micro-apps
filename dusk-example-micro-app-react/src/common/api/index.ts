import { axios } from '@xams-framework/dusk';


export function oauth2Login() {
    return axios.get('/api/user/login');
}

export function create() {
    return axios.post('/apiGateway/generateSignUrl?showapi_apiCode=9');
}

export default {
    oauth2Login, create,
};
