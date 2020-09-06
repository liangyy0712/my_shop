<template>
  <div class="register">
    <div class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input
            v-model="regForm.username"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入账号"
          />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            v-model="regForm.password"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入密码"
          />
        </div>
        <div class="mui-input-row">
          <label>确认</label>
          <input
            v-model="regForm.rePassword"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入确认密码"
          />
        </div>
        <div class="mui-input-row">
          <label>邮箱</label>
          <input
            v-model="regForm.email"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入邮箱"
          />
        </div>
      </form>
      <div class="mui-content-padded">
        <button
          @click="register"
          type="button"
          class="mui-btn mui-btn-block mui-btn-primary btnAdd"
        >
          注册
        </button>
        <div class="link-area">
          <p>注册成功后的用户可用于登录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'Register',
  data () {
    return {
      regForm:{
        username:'',
        password:'',
        rePassword:'',
        email:''
      }
    }
  },
  methods: {
    async register(){
      // 判断用户是否输入注册项  密码及确认密码是否一致
      const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      if(this.regForm.username===''){
        this.$toast('账号不能为空')
        return
      }
      if(this.regForm.username===''){
        this.$toast('账号不能为空')
        return
      }
      if(this.regForm.password===''){
        this.$toast('密码不能为空')
        return
      }
      if(this.regForm.rePassword===''){
        this.$toast('确认密码不能为空')
        return
      }
      if(this.regForm.email===''){
        this.$toast('邮箱不能为空')
        return
      }
      if(this.regForm.password!==this.regForm.rePassword){
        this.$toast('密码和确认密码不一致')
        return
      }
      if(!reg.test(this.regForm.email)){
        this.$toast('邮箱格式不正确')
        return
      }
      
      // 发送请求  完成注册
      const {data:result} = await this.$http.post('register', this.regForm)
      if(result.code===0){
        this.$toast(result.msg)
      }else{
        // 注册成功  立即登录
        // 注册信息保存至vuex
        this.$store.commit('user/setUser', result.data)
        // session_id保存至会话存储
        this.$auth.setAuthorization(result.data.session_id)
        // 弹窗提示
        this.$toast(result.msg)
        // 跳转至我的界面
        this.$router.push('/profile')
        console.log('注册')
      }
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
    text-align: left;
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

