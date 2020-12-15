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
  },
  // 9. 收藏单个商品(post)
  // /collection
  // 参数: 
  // goods: 商品的详情信息
  collection(goods){
    return http.post("/collection",goods)
  },
  // 10. 取消收藏(post)
  // /cancelCollection
  // 参数:
  // id:商品的cid
  cancelCollection({id}){
    return http.post("/cancelCollection",{id})
  },
  //   14. 获取用户信息(post)
  // /queryUser
  queryUser(){
    return http.post("/queryUser")
  },
    // 15. 修改保存用户信息(post)
      // gender: 性别
  // year: 年
  // month: 月
  // day: 日
  // id: 用户id
  // nickname: 昵称
  saveUser({id,nickname,gender,year,month,day}){
    return http.post("/saveUser",{id,nickname,gender,year,month,day})
  },
  // 24. 查询我的收藏(get)
  // /collection/list

  getCollection(){
    return http.get("/collection/list")
  }

};
