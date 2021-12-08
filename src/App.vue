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
    this.initWebSocket();
  },
  methods:{

    initWebSocket(){
      let app = this;
      if("WebSocket" in window){
        app.ws = new WebSocket('ws://172.16.161.150:9096');
        app.global.setWs(app.ws);
        app.ws.onopen = function(){
          app.$message({
            type:'success',
            message:'与服务器已连接'
            });
        };
        app.ws.onclose = function(){
          app.$message({
            type:'error',
            message:'与服务器连接已断开'
            });
          //尝试重新连接
          setTimeout(()=>{
            app.initWebSocket();
          },5000);
        }

      }else{
        console.log("浏览器不支持WebSocket!");
        
      }
    }
  }

}
</script>