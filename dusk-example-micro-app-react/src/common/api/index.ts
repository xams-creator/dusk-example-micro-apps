import { axios } from '@xams-framework/dusk';


export function oauth2Login() {
    return axios.get('/api/user/login');
}

export function create() {
    return axios.post('/api/creation/tableModels_1698379222735', {
        foo: 'bar',
    });
}

export default {
    oauth2Login, create,
};
