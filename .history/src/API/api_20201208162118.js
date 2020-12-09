import http from './http'

export default {
    // 获取首页数据
    getHttp(){
        return http
    },
    getIndexData() {
        return http.get("/recommend")
    },
    // 登录
    login({ username, password }) {
        return http.post('login', {
            username,
            password
        })
    }
}