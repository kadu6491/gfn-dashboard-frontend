import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000'
    // baseURL: 'https://ashongs-admin.herokuapp.com/'
})

export default instance