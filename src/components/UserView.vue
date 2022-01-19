<template>
    <div class="userCard">

    </div>
</template>

<style scoped>
.userCard{
  margin: 0 auto;
  padding:0px;
  width: 100%;
  height: 500px;
  border-radius: 5px;
  background: #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}


</style>

<script>
export default {
  name: 'UserView',
  props: {
    RankUser: Object
  }
}
</script>
