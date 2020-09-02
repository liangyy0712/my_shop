<template>
    <div class="container">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.img"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: ['imgList']
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    color: #fff;
    .mint-swipe-items-wrap{
        .mint-swipe-item{
            text-align: center;
        }
    }
    img{
            width: 100%;
            height: 100%;
        }
}
</style>
