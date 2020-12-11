import http from "./http";

export default {
  // 获取首页数据
  getIndexData() {
    return http.get("recommend");
  },
   // 获取登录注册默认验证码(get)
   getVerify() {
    return http.get("verify");
  },
  // 登录
  login({ username, password }) {
    return http.post("login", {
      username,
      password,
    });
  },
  // 登录
  register({ username, password }) {
    return http.post("register", {
      username,
      password,
    });
  },
  
  // 搜索
  search({ value }) {
    return http.post("search", {
      value,
    });
  },
  
};
