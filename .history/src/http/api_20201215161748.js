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
  login({ nickname, password, verify }) {
    return http.post("login", {
      nickname,
      password,
      verify,
    });
  },
  // 注册
  register({ nickname, password, verify }) {
    return http.post("register", {
      nickname,
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
  // 分类查询
  // id:默认分类的id
  classification(id) {
    return http.get(`/classification?mallSubId=${id}`);
  },
  // 12. 加入购物车(post)
  // /addShop
  // 参数:
  // id:商品的id
  addShop({ id }) {
    return http.post("addShop", {
      id,
    });
  },
  //   4. 查询获取购物车数据(get)
  // /getCard
  getCard() {
    return http.post("getCard");
  },
  // 5. 购物车加减商品(post)
  // /editCart
  // 参数:
  // count: 购物车数量
  // id: 商品id
  // mallPrice: 价格
  editCart({ count, id, mallPrice }) {
    return http.post("editCart", {
      count,
      id,
      mallPrice
    })
  },
  // 6. 购物车商品删除(post)
  // /deleteShop
  // 参数: 
  // id: 商品id(数组)
  deleteShop(id){
    return http.post("deleteShop",id)
  },
  // 8.单个商品详情(get)
  // /goods/one?id=${id}
  // 参数:
  // id:商品的id
  getGoods(id){
    return http.get(`/goods/one?id=${id}`);
  },
  
  // 11. 查询商品是否已收藏(post)
  // /isCollection
  // 参数:
  // id:商品的id
  isCollection({id}){
    return http.post("/isCollection",{id})
  }

};
