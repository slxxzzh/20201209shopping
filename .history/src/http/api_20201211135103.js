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
  login({ username, password, verify }) {
    return http.post("login", {
      username,
      password,
      verify,
    });
  },
  // 注册
  register({ username, password, verify }) {
    return http.post("register", {
      username,
      password,
      verify,
    });
  },

  // 搜索
  search({ value }) {
    return http.post("search", {
      value,
    });
  },
};
