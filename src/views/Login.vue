<template>
  <div class="loginContainer">
    <el-card class="box-card loginBox">
      <div class="el-card__header">
        <span style="color: rgb(68, 68, 68); font-size: 22px"
          >AirplaneCrash</span
        >
      </div>
      <div class="el-card__body">
        <el-form ref="User" :model="User" :rules="rules" label-width="60px">
          <el-form-item label="昵称" prop="nickname">
            <el-input type="text" v-model="User.nickname"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login('User')">登录</el-button>
          <el-button @click="reset('User')">重置</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  position: relative;
}

.loginContainer {
  width: 100%;
  height: 100%;
}

.loginBox {
  width: 380px;
  margin-top: 120px;
  margin-left: 120px;
}
</style>

<script>
import App from "../App.vue";
export default {
  components: { App },
  data() {
    return {
      User: {
        sysno: 0,
        nickname: "",
        battleScore: 0,
      },
      rules: {
        nickname: [
          { required: true, message: "请输入用户昵称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在3到8个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onRreceived);
  },
  methods: {
    onRreceived: function (msg) {
      console.log(msg);
      if (msg === undefined || msg === null) return;
      if (msg.Code == 1) {
        //登录处理
        var userinfo = JSON.parse(msg.Message);
        console.log("登录成功");
        console.log(userinfo);
        this.cookie.setCookie("UserInfo", msg.Message);
        //登录成功跳转页面

        let loadingInstance = this.$loading({
          fullscreen: true,
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loadingInstance.close();
        }, 2000);
      }
    },
    reset: function (User) {
      this.$refs[User].resetFields();
    },
    login: function (User) {
      this.$refs[User].validate((valid) => {
        if (valid) {
          let loadingInstance = this.$loading({
            lock: true,
            text: "登录中",
            fullscreen: true,
            background: "rgba(0, 0, 0, 0.7)",
          });
          var data = {};
          data.Code = 1;
          var userdata = {};
          userdata.NickName = this.User.nickname;
          data.Message = JSON.stringify(userdata);
          this.webSocket.sendMessage(data);
        }
      });
    },
  },
};
</script>
