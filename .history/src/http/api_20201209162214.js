import http from './http'

export default {
    // 获取首页数据
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
    // 登录
    search({ username, password }) {
        return http.post('search', {
            username,
            password
        })
    }
    
}