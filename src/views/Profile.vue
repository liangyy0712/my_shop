<template>
  <div class="profile">
    <div class="container">
      <router-link to="/profile/login" class="mui-navigate-right">
        <div class="user-info">
          <div class="avatar-con">
            <div class="avatar">
              <img src="../assets/img/avatar.png" class="image-info" />
            </div>
          </div>
          <div class="person-con">
            <span v-if="$store.getters['user/isLogin']">{{
              $store.state.user.loginForm.username
            }}</span>
            <span v-else>登录 / 注册</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="login-info" v-if="$store.getters['user/isLogin']">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <div class="mui-navigate-right">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/img/avatar.png"
            />
            <div class="mui-media-body">
              我的订单
            </div>
          </div>
        </li>
        <li class="mui-table-view-cell mui-media">
          <div class="mui-navigate-right">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/img/avatar.png"
            />
            <div class="mui-media-body">
              收获地址
            </div>
          </div>
        </li>
        <li class="mui-table-view-cell mui-media">
          <div class="mui-navigate-right" @click="logout">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/img/avatar.png"
            />
            <div class="mui-media-body">
              退出登录
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  methods: {
      async logout(){
        //   发送请求，完成退出
        const {data:result}=await this.$http.get('logout')
        console.log(result.code)
        // console.log('logout--'+this.$http.get('logout'))
        //   清除session中数据
        this.$auth.setAuthorization('')
        //   清除vuex的用户信息
        this.$store.commit('user/logout')
        //   提示用户退出成功
        this.$toast('退出登录')
      }
  }
}
</script>
<style lang="scss" scoped>
.profile {
  margin-bottom: 15px;
  .login-info {
    padding: 10px;
    background-color: #fff;
    // 空格类名  后代选择器 后面所有的都具备这个样式   
    .mui-table-view .mui-table-view-cell.mui-media, .mui-table-view.mui-media-body {
      line-height: 42px;
      text-align: left;
    }
    .mui-table-view-cell:after {
      left: 0px;
    }
  }
  .container {
    padding: 10px;
    background-color: #fff;
    .user-info {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 120px;
      background: linear-gradient(to right, #28a2ff, #ffd787);
      box-shadow: 0 0.1rem 0.25rem #f8e3c6;
      .avatar-con {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        .avatar {
          width: 60px;
          height: 60px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 15);
          border: 1px solid hsla(0, 0%, 100%, 4);
          border-radius: 50%;
          .image-info {
            width: 100%;
            height: 100%;
          }
        }
      }
      .person-con {
        position: absolute;
        left: 100px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
      }
    }
  }
}
</style>
