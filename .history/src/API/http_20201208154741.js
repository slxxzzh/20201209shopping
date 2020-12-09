import axios from "axios"
import { Toast } from 'vant';
const http = axios.create({
    baseURL: '/api',
    timeout: 10000
})
http.interceptors.response.use(res => {
    return res.data
}, err => {
    err.response && err.response.status
    if (status === 400) {
        Toast.fail('参数错误');
    } if (status === 401) {
        Toast.fail('没有权限');
    } if (status === 403) {
        Toast.fail('登录过期');
    } if (status === 404) {
        Toast.fail('路径错误');
    } if (status === 500) {
        Toast.fail('服务器出错');
    } else {
        Toast.fail('未知错误：' + status);
    }
})
export default http