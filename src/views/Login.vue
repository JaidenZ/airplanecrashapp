<template>
    <div class="loginContainer">
        <div class="loginBox">
            <h1>AirplaneCrash</h1>
            <el-form ref="User" :model="User" :rules="rules" label-width="60px">
                <el-form-item label="昵称" prop="nickname">
                    <el-input type="text" v-model="User.nickname"></el-input>
                </el-form-item>
                <el-button type="primary" @click="login('User')">登录</el-button>
                <el-button @click="reset('User')">重置</el-button>
            </el-form>
        </div>
    </div>
</template>

<style scoped>

html,body{
    margin:0;
    padding:0;
    position: relative;
  
}

.loginContainer{
    width:100%;
    height:100%;

}

.loginBox{
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-150px;
    margin-left:-175px;
    width: 360px;
    min-height: 300px;
    padding: 30px 20px 20px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    text-align: center;
}



</style>

<script>
export default {
    data(){
        return{
            User:{
                sysno:0,
                nickname:'',
                battleScore:0
            },
            rules:{
                nickname:[
                    {required:true,message:'请输入用户昵称',trigger:'blur'},
                    {min:3,max:8,message:'长度在3到8个字符',trigger:'blur'},
                ]
            }
        }
    },
    methods:{
        reset:function(User){
            this.$refs[User].resetFields();
        },
        login:function(User){
            this.$refs[User].validate((valid)=>{
                if(valid){
                    let v = this;
                    const loading = v.$loading({
                        lock:true,
                        text:'Loading',
                        spinner:'el-icon-loading'
                    });
                    setTimeout(() => {
                        loading.close();
                    }, 2000);
                    v.$message({
                        type:'success',
                        message:'login success'
                    });
                }else{
                    console.log('login error');
                    return false;
                }
            });
        }
    }
}
</script>
