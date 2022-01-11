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

.loginContainer {
  margin:0px;
  padding:0px;
  width: 100%;
  padding-top: 50%;
  position: relative;
}

.loginContainer .loginBox {
  width: 380px;
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

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
    this.webSocket.addMessageCallback(this.onReceived);
    //检测是否登录成功
    if(this.$store.getters.serverConnect && this.$store.getters.isLogin){
      let loadingInstance = this.$loading({
          fullscreen: true,
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loadingInstance.close();
          this.$router.replace({name:'Home'})
        }, 2000);
    }
  },
  methods: {
    onReceived: function (msg) {
      
      if (msg === undefined || msg === null) return;
      if (msg.Code == 1) {
        //登录处理
        var userinfo = JSON.parse(msg.Message);
        console.log("登录成功");
        console.log(userinfo);
        this.$store.commit("USER_SET",userinfo);

        //登录成功跳转页面

        let loadingInstance = this.$loading({
          fullscreen: true,
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loadingInstance.close();
          this.$router.push({name:'Home'})
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
