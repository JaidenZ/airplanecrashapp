<template>
  <div class="airplaneSetting">
    <div class="settingTop">
      <div class="settingTopitem" v-for="item in settingTopList" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="settingAside">
      <div class="settingAsideitem" v-for="item in settingAsideList" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="settingCenter">
      <el-row v-for="row in Items" :key="row.key">
        <el-col class="bodyItem" v-for="column in row.data" :key="column.key">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.airplaneSetting {
  width: 1200px;
  height: 600px;
  margin-left: 50px;
  float: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.settingTop {
  width: 1150px;
  height: 49px;
  margin-left: 50px;
  border-bottom: 1px solid #787878;
  display: flex;
}

.settingAside {
  width: 49px;
  height: 550px;
  margin: 0px;
  border-right: 1px solid #787878;
  float: left;
  display: inherit;
}
.settingTopitem {
  width: 50px;
  height: 49px;
  margin: 1px;
  text-align: center;
  line-height: 49px;
  font-size: 18px;
}
.settingAsideitem {
  width: 50px;
  height: 49px;
  margin: 1px;
  text-align: center;
  line-height: 49px;
  font-size: 18px;
}

.settingCenter {
  width: 1150px;
  height: 600px;
  margin: 0px;
  float: left;
}

.bodyItem {
  border: 1px solid #d8d8d8;
  height: 48px;
  width: 48px;
  margin: 1px;
  background-color: #343434;
}

.airplane {
  background-color: #787878;
}
</style>

<script>
export default {
  name: "AirplaneSetting",
  props: {
    Items: Array,
  },
  data() {
    return {
      settingTopList: [
        "A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","T","U","V","W",
      ],
      settingAsideList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
