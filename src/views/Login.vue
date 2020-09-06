<template>
  <div class="login">
      <div class="mui-content">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>账号</label>
                  <input v-model="loginForm.username" type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
              </div>
              <div class="mui-input-row">
                  <label>密码</label>
                  <input v-model="loginForm.password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
              </div>
          </form>
          <div class="mui-content-padded">
              <button @click="login" type="button" class="mui-btn mui-btn-block mui-btn-primary btnAdd">登录</button>
              <div class="link-area">
                  <a @click="register">还没有账号？前往登录</a>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    export default{
        name:'Login',
        data(){
            return{
                loginForm:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            async login () {
                // 判断是否输入
                if(this.loginForm.username===''||this.loginForm.password===''){
                    this.$toast('请输入账号或密码')
                }else{
                    // 发送请求  进行登录
                    const {data:result} = await this.$http.post('login', this.loginForm)
                    console.log(result.data)
                    if(result.code===0){
                        this.$toast(result.msg)
                    }else{
                        // 登录成功 将数据保存至vuex中  跳转到/profile界面
                        // this.$toast(result.msg)
                        // console.log(result.data.id+'==='+result.data.username)
                        this.$store.commit('user/setUser', result.data)
                        // console.log('---'+this.$store.getters['user/isLogin'])
                        console.log('---'+this.$store.state.user.loginForm.username)
                        this.$auth.setAuthorization(result.data.session_id)
                        this.$router.push('/profile')
                    }
                }  
            },
            register () {
                this.$router.push('/profile/register')
            }
        }
    }
</script>
<style lang="scss" scoped>
.mui-input-group{
    margin-top:10px;
    background-color: transparent;
}
.mui-input-group label{
    width: 22%;
}
// 覆盖现有的background：none的样式
.mui-input-row:last-child{
    background-color: #fff;
}
.mui-input-row{
    margin-top: 20px;
    background: #fff;
    font-size: 18px;
}
// 兄弟选择器  ~label后所有的input、select、textarea标签  而+只是其后的第一个
.mui-input-row label ~input,
.mui-input-row label ~select,
.mui-input-row label ~textarea{
    width:78%;
}
.link-area{
    // 设置为block，一行一个标签
    // display: block;
    margin-top: 25px;
    text-align: center;
}
.mui-content-padded{
    margin-top: 20px;
    .btnAdd{
        // display: block;
        width: 100%;
        background-color: #007aff;
        color: #fff;
        font-size: 18px;
        padding: 15px 0;
    }
}
</style>
