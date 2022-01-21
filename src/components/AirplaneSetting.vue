<template>
  <div class="airplaneSetting">
    <el-row v-for="item in yItem" :key="item.key">
      <el-col class="bodyItem" v-for="item in item.xItem" :key="item.key" ></el-col>
    </el-row>
  </div>
</template>
<style scoped>
.airplaneSetting{
    width: 1200px;
    height: 600px;
    margin-left: 50px;
    float: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

}

.bodyItem {
  border: 1px solid #d8d8d8;
  height: 48px;
  width: 48px;
  margin: 1px;
}

.airplane{
  background-color:#787878;

}

</style>

<script>
export default {
  name: "AirplaneSetting",
  props: {},
  data() {
    yItem:[
     {key:"0",xItem:[

       {key:"A"}
     ]}



    ]
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
