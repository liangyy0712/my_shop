<template>
  <div class="home">
    <swiper :imgList="imgList"/>
    <square/>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue'
import Square from '../components/Square.vue'
export default {
  name: 'Home',
  data () {
    return {
      imgList:[]
    }
  },
  created () {
    this.getImgList()
  },
  methods: {
    async getImgList(){
      // this.$indicator.open({ text:'努力加载中...' })
      const { data:result } =await this.$http.get('imglist')
      // this.$indicator.close()
      if(result.code===0){
        this.$toast('加载轮播图失败')
      }else{
        this.imgList=result.data
      }
    }
  },
  components: {
    Swiper,
    Square
  }
}
</script>
