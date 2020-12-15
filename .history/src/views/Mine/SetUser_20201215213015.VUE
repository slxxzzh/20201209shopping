<template>
  <div>
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
      <button class="btn" @click="toggleShow">设置头像</button>
      <my-upload
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="80"
        :height="200"
        img-format="png"
        :size="size"
        langType="zh"
        :noRotate="false"
        field="Avatar1"
        url="https://httpbin.org/post"
      ></my-upload>
      <img :src="imgDataUrl" />
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
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
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

      imgDataUrl: "",
      show: false,
      size: 2.1,
    };
  },
  components: {
      myUpload
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },

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
.vue-image-crop-upload .vicp-wrap{
    width:100px
}
</style>
