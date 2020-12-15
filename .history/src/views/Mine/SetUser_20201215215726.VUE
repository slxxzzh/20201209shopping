<template>
  <div class="setUser">
    <van-nav-bar
      title="个人资料"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        disabled 
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field name="uploader" label="头像">
        <template #input>
          <van-uploader v-model="uploader" :max-count="1" />
        </template>
      </van-field>
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        label="生日"
        placeholder="点击选择时间"
        v-model="currentDate"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          :min-date="new Date(1920, 0, 1)"
          :max-date="new Date(2022, 0, 1)"
          :value="showDate"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "", // 用户名
      nickname: "", // 昵称
      radio: "1", // 性别
      showPicker: false,
      currentDate: "",
      uploader: [{url:""}],
      showDate:dayjs(2000, 0, 1)
    };
  },
  components: {},
  methods: {
    onSubmit() {
      console.log(this.currentTime);
    },
    onConfirm(t) {
      console.log(t);
      this.currentDate = dayjs(t)
        .format()
        .slice(0, 10);
      this.showPicker = false;
    },
    queryUser() {
      this.$api
        .queryUser()
        .then((res) => {
          console.log(res);
          this.username = res.userInfo.username
          this.nickname = res.userInfo.nickname
          this.radio = res.userInfo.gender === "男"?"1":"2"
          this.uploader[0].url = res.userInfo.avatar
          this.currentDate = `${res.userInfo.year}-${res.userInfo.month}-${res.userInfo.day}`
        //   
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
      console.log(dayjs(2000, 0, 1));
    this.queryUser();
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
