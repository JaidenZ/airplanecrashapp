<template>
    <div class="rankCard">
      <span>排行榜</span>
      <el-table
      :data="RankUser"
      stripe=true
      style="width: 100%">
            <el-table-column
        prop="rank"
        label="排名">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="score"
        label="积分">
      </el-table-column>
    </el-table>

    </div>
</template>

<style scoped>
.rankCard{
  margin: 0 auto;
  padding:0px;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background: #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}


</style>

<script>
export default {
  name: 'Rank',
  props: {
    RankUser: Array
  }
}
</script>
