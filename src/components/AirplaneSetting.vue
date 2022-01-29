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
            :class="
              column.data.selected
                ? 'airplane'
                : column.data.preview
                ? 'airplanepreview'
                : 'bodyItem'
            "
            v-for="column in row.data"
            :key="column.key"
            @click.native="itemSelect(column)"
            @mouseenter.native="itempreview(column)"
            @mouseover="itempreviewclear"
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

.airplanepreview {
  background-color: #d38939;
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
      enableSetair: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
    preparedReady() {
      console.log(123233);
    },
    setAirplane() {
      this.enableSetair = true;
      this.$message({
        type: "info",
        message: "请在格中选择飞机头",
      });
    },
    itempreview(item) {
      if (!this.enableSetair) {
        return;
      }
      //计算需要预览的格子
      var previewItems = [];
      //机身
      for (var i = 0; i < 5; i++) {
        var x = item.key;
        var y = item.row;
        y += i;

        if (x > 0 && x < this.settingTopList.length) {
          previewItems.push({ x: x, y: y });
        }
      }
      //机翼
      var airfoily = item.row + 1;
      var airfoilx1 = item.key + 1;
      var airfoilx2 = item.key + 2;
      var airfoilx3 = item.key - 1;
      var airfoilx4 = item.key - 2;
      if (0 < airfoily < this.settingAsideList.length) {
        if (0 < airfoilx1 < this.settingTopList.length) {
          previewItems.push({ x: airfoilx1, y: airfoily });
        }
        if (0 < airfoilx2 < this.settingTopList.length) {
          previewItems.push({ x: airfoilx2, y: airfoily });
        }
        if (0 < airfoilx3 < this.settingTopList.length) {
          previewItems.push({ x: airfoilx3, y: airfoily });
        }
        if (0 < airfoilx4 < this.settingTopList.length) {
          previewItems.push({ x: airfoilx4, y: airfoily });
        }
      }
      //机尾
      var airtaily = item.row + 3;
      var airtailx1 = item.key + 1;
      var airtailx2 = item.key - 1;
      if (0 < airtaily < this.settingAsideList.length) {
        if (0 < airtailx1 < this.settingTopList.length) {
          previewItems.push({ x: airtailx1, y: airfoily });
        }
        if (0 < airtailx2 < this.settingTopList.length) {
          previewItems.push({ x: airtailx2, y: airfoily });
        }
      }
      for (var i = 0; i < this.Items.length; i++) {
        var row = this.Items[i];
        for (var t = 0; t < row.data.length; t) {
          var item = row.data[t];
          for (var p = 0; p < previewItems.length; p++) {
            var pitem = previewItems[p];
            if (item.key == pitem.x && item.row == pitem.y) {
              item.data.preview = true;
            }
          }
        }
      }
    },
    itempreviewclear() {},
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
      console.log(
        "选中第" +
          (data.row + 1) +
          "行,第" +
          (data.key + 1) +
          "列数据.[" +
          itemText +
          "]"
      );

      if (data.data.type == 0 && this.enableSetair) {
        //设置当前为机头,判断高度与宽度
        if (data.row > this.settingAsideList.length - 5) {
          this.$message({
            type: "error",
            message: "当前位置高度不够,不能设置飞机",
          });
          return;
        }
        if (data.key > this.settingTopList.length - 3 || data.key < 3) {
          this.$message({
            type: "error",
            message: "当前位置宽度不够，不能设置飞机",
          });
          return;
        }

        //可以设置飞机,判断是否与其他飞机重复
      }
    },
  },
};
</script>
