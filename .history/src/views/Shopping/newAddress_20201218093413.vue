<template>
  <div class="newAddress">
    <van-nav-bar
      :title="id ? '修改地址' : '新增地址'"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-set-default
      @save="onSave"
    />
    <van-button v-if="id" type="default" @click="delAddress" block
      >删除</van-button
    >
  </div>
</template>

<script>
import areaList from "../../assets/area";
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: -1,
      areaList,
      addressInfo: {},
      isShopping: false,
    };
  },
  components: {},
  methods: {
    // 新增(修改)地址
    onSave(v) {
      // name:用户名
      // tel:电话
      // address:(省+市+区+详情地址)
      // isDefault:是否默认
      // province:省
      // city:市
      // county:区
      // addressDetail:详情地址，
      // areaCode:地区代码
      if (this.id) {
        this.$api
          .newAddress({
            name: v.name,
            tel: v.tel,
            address: `${v.province}${v.city}${v.county}${v.addressDetail}`,
            isDefault: v.isDefault,
            province: v.province,
            city: v.city,
            county: v.county,
            addressDetail: v.addressDetail,
            areaCode: v.areaCode,
            id: this.id,
          })
          .then((res) => {
            this.$Toast.success(res.msg);
            if (this.isShopping) {
              this.$router.push({
                name: "address",
                query: { isShopping: true },
              });
            } else {
              this.$router.push({ name: "address" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$api
          .newAddress({
            name: v.name,
            tel: v.tel,
            address: `${v.province}${v.city}${v.county}${v.addressDetail}`,
            isDefault: v.isDefault,
            province: v.province,
            city: v.city,
            county: v.county,
            addressDetail: v.addressDetail,
            areaCode: v.areaCode,
          })
          .then((res) => {
            this.$Toast.success(res.msg);
            if (this.isShopping) {
              this.$router.push({
                name: "address",
                query: { isShopping: true },
              });
            } else {
              this.$router.push({ name: "address" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 获取单个收货地址
    getAddress() {
      this.$api
        .getAddress()
        .then((res) => {
          this.addressInfo = res.address.filter((item) => {
            return item._id === this.id;
          })[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除地址
    delAddress() {
      let _this = this;
      function beforeClose(action, done) {
        if (action === "confirm") {
          this.$api
            .deleteAddress({
              id: _this.id,
            })
            .then((res) => {
              _this.$Toast.success(res.msg);
              if (_this.isShopping) {
                _this.$router.push({
                  name: "address",
                  query: { isShopping: true },
                });
              } else {
                _this.$router.push({ name: "address" });
              }
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
        } else {
          done();
        }
      }

      Dialog.confirm({
        title: "标题",
        message: "弹窗内容",
        beforeClose,
      }).catch(() => {});
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.isShopping = this.$route.query.isShopping || false;
    if (this.id) {
      this.getAddress();
    }
    console.log(this.id);
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.newAddress {
  text-align: left;
}
.van-button,
.van-address-edit__buttons {
  width: 90vw;
  margin: 0 auto;
}
</style>
