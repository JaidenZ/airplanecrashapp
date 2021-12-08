export default{
    ws:{},
    initWebSocket:function(address){
        if("WebSocket" in window){
            this.ws = new WebSocket('ws://172.16.161.150:9096');
            
            this.ws.onopen = function(){
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