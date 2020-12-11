<template>
  <div class="login">
    <van-nav-bar
      title="登录 / 注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form validate-first @failed="onFailed">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="value1"
    name="pattern"
    placeholder="正则校验"
    :rules="[{ pattern, message: '请输入正确内容' }]"
  />
  <!-- 通过 validator 进行函数校验 -->
  <van-field
    v-model="value2"
    name="validator"
    placeholder="函数校验"
    :rules="[{ validator, message: '请输入正确内容' }]"
  />
  <!-- 通过 validator 进行异步函数校验 -->
  <van-field
    v-model="value3"
    name="asyncValidator"
    placeholder="异步函数校验"
    :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    onClickLeft(){
      history.go(-1)
    }
  },
  mounted() {
    
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
  .login{
    height:100vh;
    background:url("../assets/timg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
</style>
