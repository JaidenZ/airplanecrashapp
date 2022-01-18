<template>
  <el-container>
    <el-header>
      <webheader
        :msg="message"
        style="
          position: absolute;
          top: 0;
          z-index: 1000;
          background-color: transparent;
        "
      ></webheader>
    </el-header>
    <el-main>
      <div
        v-if="this.gameStatus == 0"
        v-loading="gameloading"
        :element-loading-text="gameloadingtext"
        class="gamecaptrue"
      >
        <el-button v-if="this.gameStatus == 0" @click="startGame"
          >开始匹配</el-button
        >
      </div>
      <div
        v-if="this.gameStatus == 1"
        v-loading="gameloading"
        :element-loading-text="gameloadingtext"
        class="gamecaptrue"
      >
        预备飞机<el-button @click="preparedReady">准备完毕</el-button>
      </div>
      <div
        v-if="this.gameStatus == 2"
        v-loading="gameloading"
        :element-loading-text="gameloadingtext"
        class="gamecaptrue"
      >
        对战中<el-button @click="gamePause">暂停</el-button>
      </div>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<style scoped>
.el-header {
  line-height: 60px;
  background-color: #348bda;
  color: white;
  padding: 0;
}
.el-main {
  /*background-color: #9abce7;*/
  color: #333;
  line-height: 60px;
}
.el-footer {
  line-height: 16px;
}

.gamecaptrue {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.gamenormal {
  background-color: white;
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
      message: "welcome to airplanecrashapp",
      gameStatus: 0,
      gameloading: false,
      gameloadingtext: "",
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
    //检测是否登录成功
    if (!this.$store.getters.serverConnect && !this.$store.getters.isLogin) {
      let loadingInstance = this.$loading({
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loadingInstance.close();
        this.$router.replace({ name: "Login" });
      }, 2000);
    }
  },
  methods: {
    startGame() {
      this.gameloading = true;
      this.gameloadingtext = "正在匹配对手";
      setTimeout(() => {
        this.gameStatus = 1;
        this.gameloading = false;
      }, 2000);
    },
    preparedReady() {
      this.gameloading = true;
      this.gameloadingtext = "正在等待对手预备飞机";
      setTimeout(() => {
        this.gameStatus = 2;
        this.gameloading = false;
      }, 4000);
    },
    gamePause() {
      this.gameloading = true;
      this.gameloadingtext = "暂停了对局";
      setTimeout(() => {
        this.gameloading = false;
      }, 3000);
    },
    onReceived: function (msg) {
      if (msg === undefined || msg === null) return;
      if (msg.Code == 2) {
      }
    },
  },
};
</script>
