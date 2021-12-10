<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">


#app {
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c502f;
  
}

</style>

<script>
export default {
  created(){
    this.connect();
  },
  methods:{
    connect(){
      this.webSocket.initWebSocket('172.16.161.150',9096,this.onOpen,this.onClose);
    },
    onOpen(){
      this.$message({
        type:'success',
        message:'与服务器已连接'
        });
    },
    onClose(){
      this.$message({
        type:'error',
        message:'与服务器连接已断开'
      });
      //尝试重新连接
      setTimeout(()=>{
        this.webSocket.reTryConnect();
      },5000);
    }
  }
}
</script>