<template>
  <div>
    <van-nav-bar
      title="收货地址"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="checkAdd"
    />
    <van-empty v-if="list.length===0" description="暂无地址" />
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      isShopping: false
    };
  },
  components: {},
  methods: {
    // 新增地址
    newAddress() {},
    // 获取收货地址
    getAddress() {
      this.$api
        .getAddress()
        .then(res => {
          this.list = res.address;
          this.list.map(item => {
            this.$set(item, "id", item._id);
            if (item.isDefault) {
              this.chosenAddressId = item.id;
            }
          });

          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onAdd() {
      this.$router.push({
        name: "newAddress"
      });
    },
    onEdit(v, i) {
      this.$router.push({
        name: "newAddress",
        query: { id: this.list[i].id }
      });
    },
    // 选中地址
    checkAdd(v, i) {
      if (this.isShopping) {
        this.$router.push({
          name: "orderSettlement",
          query: { addressId: this.list[i].id }
        });
      }
    }
  },
  mounted() {
    this.isShopping = this.$route.query.isShopping || false;
    this.getAddress();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.van-button {
  position: fixed;
  bottom: 0;
  width: 92vw;
}
</style>