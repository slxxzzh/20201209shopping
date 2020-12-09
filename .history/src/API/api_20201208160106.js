import http from 'http'

export default {
    // 登录
    login({ username, password }) {
        console.log(http);
        return http.post('login', {
            // username,
            // password
        })
    }
}