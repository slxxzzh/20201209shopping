<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "？",
      password: "...",
    };
  },
  components: {},
  methods: {
    onSubmit() {
      axios.post("/api/login", {
        nickname: "aaa",
        password: "bbb",
        verify: "ccc1",
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
      Toast("登录");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>