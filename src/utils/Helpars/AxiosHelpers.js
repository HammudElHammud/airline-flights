import axios from 'axios';

export function createAxios(baseUrl = process.env.BACKEND_API_URL ?? '//localhost:4000/') {

    return axios.create({
        baseURL: baseUrl,
    });
}


