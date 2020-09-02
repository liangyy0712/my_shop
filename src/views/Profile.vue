<template>
    <div class="profile">
        <div class="container">
            <router-link to="/profile/login" class="mui-navigate-right">
                <div class="user-info">
                    <div class="avatar-con">
                        <div class="avatar">
                            <img src="../assets/img/avatar.png" class="image-info">
                        </div>
                    </div>
                    <div class="person-con">
                        <span>登录 / 注册</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Profile'
}
</script>
<style lang="scss" scoped>
.profile{
    // margin-bottom: 15px;
    .container{
        padding: 10px;
        background-color: #fff;
        .user-info{
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 120px;
            background: linear-gradient(to right,#28a2ff,#ffd787);
            box-shadow: 0 0.1rem 0.25rem #f8e3c6;
            .avatar-con{
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                .avatar{
                    width: 60px;
                    height: 60px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,15);
                    border: 1px solid hsla(0, 0%, 100%, 4);
                    border-radius: 50%;
                    .image-info{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .person-con{
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
