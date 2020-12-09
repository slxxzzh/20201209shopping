import http from 'http'

export default {
    // 登录
    login({username,password}){
        return http.post('login',{
            username,
            password
        })
    }
}