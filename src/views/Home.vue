<template>
  <el-container>
    <el-header>
     <webheader :msg="message" style="position: absolute;top: 0;z-index: 1000;background-color: transparent"></webheader>
    </el-header>
    <el-main> 
      <el-button @click="changeDuration">test</el-button>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<style scoped>
.el-header {
  line-height: 60px;
  background-color: #348bda;
  color: white;
}
.el-main {
  background-color: #9abce7;
  color: #333;
  line-height: 60px;
}
.el-footer {
  line-height: 16px;
}
</style>

<script>
import webheader from "../components/WebHeader.vue";

export default {
  components: { webheader },
  name: "Home",
  data() {
    return {
      loading: true,
      message:"welcome to airplanecrashapp"
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
    //检测是否登录成功
    if(!this.$store.getters.serverConnect && !this.$store.getters.isLogin){
      let loadingInstance = this.$loading({
          fullscreen: true,
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loadingInstance.close();
          this.$router.replace({name:'Login'})
        }, 2000);
    }

  },
  methods: {
    changeDuration(){
      this.message = "正在匹配";
    },
    onReceived: function (msg) {
      if (msg === undefined || msg === null) return;
      if (msg.Code == 2) {
      }
    },
  },
};
</script>
