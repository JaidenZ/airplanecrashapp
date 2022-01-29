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
        <el-row :gutter="20">
          <el-col :span="12"><rank :RankUser="rankUser" /></el-col>
          <el-col :span="12"><userview /></el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-button v-if="this.gameStatus == 0" @click="startGame"
              >开始匹配</el-button
            >
          </el-col>
          <el-col :span="6">
            <el-button v-if="this.gameStatus == 0" @click="startGame"
              >自由练习</el-button
            >
          </el-col>
          <el-col :span="6">
            <el-button v-if="this.gameStatus == 0" @click="startGame"
              >个人设置</el-button
            >
          </el-col>
          <el-col :span="6">
            <el-button v-if="this.gameStatus == 0" @click="startGame"
              >关于我们</el-button
            >
          </el-col>
        </el-row>
      </div>
      <div
        v-if="this.gameStatus == 1"
        v-loading="gameloading"
        :element-loading-text="gameloadingtext"
        class="gamecaptrue"
      >
        <airplanesetting :Items="settingItems" />
        
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
  background-color: #d8d8d8;
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

.controlList {
  width: 50%;
  height: 10px;
  border: 1px solid black;
  margin: 0px auto;
  padding: 0 auto;
}
</style>

<script>
import webheader from "../components/WebHeader.vue";
import rank from "../components/Rank.vue";
import userview from "../components/UserView.vue";
import airplanesetting from "../components/AirplaneSetting.vue";

export default {
  components: { webheader, rank, userview, airplanesetting },
  name: "Home",
  data() {
    return {
      loading: true,
      message: "welcome to airplanecrashapp",
      gameStatus: 0,
      gameloading: false,
      gameloadingtext: "",
      rankUser: new Array(),
      settingItems: new Array(),
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
    //检测是否登录成功
    if (!this.$store.getters.serverConnect && !this.$store.getters.isLogin) {
      //let loadingInstance = this.$loading({
      //  fullscreen: true,
      //  background: "rgba(0, 0, 0, 0.7)",
      //});
      //setTimeout(() => {
      //  loadingInstance.close();
      //  this.$router.replace({ name: "Login" });
      //}, 2000);
    }

    this.rankUser.push({ rank: 1, nickname: "Jaiden", score: 89 });
    this.rankUser.push({ rank: 2, nickname: "Izsan", score: 88 });


  },
  methods: {
    startGame() {
      this.gameloading = true;
      this.gameloadingtext = "正在匹配对手";

    for (var y = 0;y<11;y++) {
      var row = {};
      row.key = y;
      row.data = [];
      for (var x = 0;x<23;x++) {
        var column = {};
        column.row = y;
        column.key = x;
        column.data = { type:0,selected:false,preview:false};
        row.data.push(column);
      }
      this.settingItems.push(row);
    }

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
