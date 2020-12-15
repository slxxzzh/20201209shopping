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
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
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
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        readonly
        clickable
        name="datetimePicker"
        label="时间选择"
        placeholder="点击选择时间"
        v-model="currentDate"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          :min-date="new Date(1920, 0, 1)"
          :max-date="new Date(2022, 0, 1)"
          :value="new Date(2000, 0, 1)"
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
      username: "",
      password: "",
      radio: "1",
      email: "",
      showPicker: false,
      currentTime: "",
      currentDate: "",
    };
  },
  components: {
  },
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
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>

</style>
