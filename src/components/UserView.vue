<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户信息</span>
    </div>
    <el-descriptions>
      <el-descriptions-item label="用户名">
        {{ this.$store.getters.currentUser.NickName }}</el-descriptions-item
      >
      <el-descriptions-item label="最后登录">
        {{ this.$store.getters.currentUser.NickName }}</el-descriptions-item
      >
      <el-descriptions-item label="积分">123</el-descriptions-item>
      <el-descriptions-item label="游戏局数">83</el-descriptions-item>
      <el-descriptions-item label="获胜局数">51</el-descriptions-item>
      <el-descriptions-item label="对局胜率">67.23%</el-descriptions-item>
      <el-descriptions-item label="用户状态">
        <el-tag size="small">等待对局</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<style scoped>
.box-card {
  margin: 0 auto;
  padding: 0px;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background: #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>

<script>
export default {
  name: "UserView",
  props: {
    RankUser: Object,
  },
};
</script>
