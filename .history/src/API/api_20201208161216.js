import http from 'http'

export default {

    getIndexData() {
        return http.get("recommend")
    },
    // 登录
    login({ username, password }) {
        return http.post('login', {
            username,
            password
        })
    }
}