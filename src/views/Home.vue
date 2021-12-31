<template>
  <el-container>
    <el-header>
      <header></header>
    </el-header>
    <el-main> </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: rgb(96, 148, 54);
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
import header from "../components/Header.vue";

export default {
  components: { header },
  name: "Home",
  data() {
    return {
      loading: true,
      message:"2132"
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
  },
  methods: {
    onReceived: function (msg) {
      if (msg === undefined || msg === null) return;
      if (msg.Code == 2) {
      }
    },
  },
};
</script>
