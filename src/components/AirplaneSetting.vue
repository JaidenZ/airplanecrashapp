<template>
  <div>
    <div class="airplaneSetting">
      <div class="settingTop">
        <div class="settingTopitem" v-for="item in settingTopList" :key="item">
          {{ item }}
        </div>
      </div>
      <div class="settingAside">
        <div
          class="settingAsideitem"
          v-for="item in settingAsideList"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="settingCenter">
        <el-row v-for="row in Items" :key="row.key">
          <el-col
            class="bodyItem"
            v-for="column in row.data"
            :key="column.key"
            @click.native="itemSelect(column)"
          >
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="airplaneSettingControl">
      <el-button @click="setAirplane">设置机头</el-button>
      <el-button @click="preparedReady">准备完毕</el-button>
    </div>
  </div>
</template>
<style scoped>
.airplaneSettingControl {
  width: 200px;
  height: 600px;
  margin-left: 15px;
  float: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

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
  height: 48px;
  width: 48px;
  margin: 1px;
  background-color: #d8d8d8;
}

.bodyItem:hover {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
      ],
      settingAsideList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
    preparedReady() {
      console.log(123233);
    },
    setAirplane(){

    },
    itemSelect(data) {
      var itemText = "未选中";
      if (data.data.type == 0) {
        itemText = "未选中";
      } else if (data.data.type == 1) {
        itemText = "机头";
      } else if (data.data.type == 2) {
        itemText = "机身";
      } else if (data.data.type == 3) {
        itemText = "机翼";
      } else if (data.data.type == 3) {
        itemText = "机尾";
      }
      console.log("选中第" + (data.row+1) + "行,第" + (data.key+1) + "列数据.[" + itemText + "]");
    },
  },
};
</script>
