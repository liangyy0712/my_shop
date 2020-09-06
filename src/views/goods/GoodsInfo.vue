<template>
  <div class="goods-info">
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imgList="goodsInfo.album"/>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfo.name }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            定价:<span>￥{{ goodsInfo.price }}</span>
          </p>
          <div v-if="goodsInfo.num">
            <!-- 购买数量 -->
            <p class="go-num">
              购买数量<number-box @count="countChanged" :max="goodsInfo.num" initCount="1" :goodsId="goodsInfo.id"/>
            </p>
            
            <!-- 立即购买 加入购物车 -->
            <p class="go-buy">
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
          </div>
          <div v-else>该商品暂时无货</div>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p v-if="goodsInfo.sell_point">商品卖点：{{goodsInfo.sell_point}}</p>
          <p>库存情况：{{goodsInfo.num}}件</p>
          <p>上架时间：{{goodsInfo.create_time}}</p>
        </div>
      </div>

      <div class="mui-card-header" v-if="goodsInfo.content">商品详情</div>
      <div class="mui-card-content goods_desc">
        <div class="content" v-html="goodsInfo.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper.vue'
import NumberBox from '../../components/NumberBox.vue'
export default {
  name: 'GoodsInfo',
  props: ['id'],
  components:{
    Swiper,
    NumberBox
  },
  data() {
    return {
      goodsInfo: {}
    }
  },
  methods: {
    countChanged(val){

    },
    async getGoodsInfo() {
      const { data: result } = await this.$http.get('goodsinfo', {
        params: { id: this.id }
      })
      console.log('商品详情' + JSON.stringify(result))
      if (result.code === 0) {
        this.$toast(result.msg)
      } else {
        console.log('商品详情' + JSON.stringify(result.data))
        if (result.data) {
          this.goodsInfo = result.data
        } else {
          this.$toast('商品不存在')
        }
      }
    }
  },
  created() {
    //   console.log(this.id)
    this.getGoodsInfo()
  }
}
</script>

<style lang="scss" scoped>
.goods-info{
  background: #fff;
  overflow: hidden;
  .price{
    span{
      color: red;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .go-buy{
    display: flex;
    margin: 10px 0 0;
    justify-content: center;
    button{
      margin: 0 5px;
    }
  }
  .goods-desc{
    background: #fff;
    padding:5px;
    h3{
      font-size:14px;
      color:#226aff;
      text-align: center;
      margin: 15px 0;
    }
    .content{
      font-size:14px;
      line-height: 28px;
      img{
        width: 100%;
      }
    }
  }
  .go-num{
    div{
      margin-left: 15px;
    }
  }
}
</style>
