<template>
  <div class="airplaneSetting">
    <!--<el-row v-for="y in 24" :key="y">
      <el-col
        v-for="x in 24"
        :key="x"
        class="pointer"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
      ></el-col>
    </el-row>-->
    <el-row>

    </el-row>
  </div>
</template>
<style scoped>
.airplaneSetting{
    width:100%;
    height: 100%;
}

.pointer {
  border: 1px solid #d8d8d8;
  height: 25px;
}

.pointer:hover {
  background-color: gray;
}
</style>

<script>
export default {
  name: "AirplaneSetting",
  props: {},
  data() {
    return {
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 2 },
      ],
    };
  },
};
</script>
