<template>
<div>
<el-row :gutter="20">

<el-col>1</el-col>
<el-col>2</el-col>
<el-col>3</el-col>
</el-row>

  <el-skeleton :rows="6" :loading="loading" animated />

</div>

</template>

<style scoped>
 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }

</style>

<script>
import App from "../App.vue";

export default {
  components: { App },
  name: 'Home',
  data(){
    return{
      loading:true
    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
  },
  methods:{
    onReceived:function(msg){
      if (msg === undefined || msg === null) return;
      if(msg.Code == 2){

      }
    }
  }

}
</script>
