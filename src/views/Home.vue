<template>
   <el-skeleton :rows="6" animated />
</template>


<style scoped>


</style>

<script>
import App from "../App.vue";

export default {
  components: { App },
  name: 'Home',
  data(){
    return{

    };
  },
  created() {
    this.webSocket.addMessageCallback(this.onReceived);
  },
  methods:{
    onReceived:function(msg){

    }
  }

}
</script>
