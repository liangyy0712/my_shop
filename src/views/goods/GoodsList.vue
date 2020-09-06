<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id">
      <router-link :to="{ name: 'goods_info', params: { id: item.id } }">
        <img :src="item.image" />
        <h1 class="title">{{ item.name }}</h1>
        <p class="info">
          <span class="price">￥{{ item.price }}</span>
          <span class="sell">剩余{{ item.num }}件</span>
        </p>
      </router-link>
    </div>
    <mt-button
      class="more"
      v-if="goodsList.length !== 0"
      size="large"
      @click="getMore"
      >加载更多</mt-button
    >
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: ['category_id'],
  data() {
    return {
      goodsList: [],
      last_id: 0
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      // console.log('商品' + this.category_id)
      // console.log('商品列表' + this.goodsList)
      this.$indicator.open({ text: '加载中...' })
      var params = {
        category_id: this.category_id,
        last_id: this.last_id
      }
      // 发送请求
      // 请求参数必须要用键值对的形式
      this.$http.get('goodslist', { params: params }).then(res => {
        this.$indicator.close()
        if (res.data.code === 0) {
          this.$toast(res.data.msg)
        } else {
          // console.log('获取商品' + JSON.stringify(res.data.data))
          if (res.data.data.length > 0) {
            // 根据伪编号查询数据  进行拼接
            this.goodsList = this.goodsList.concat(res.data.data)
            // 请求成功后，将当前请求最后一个商品的id赋值给last_id
            this.last_id = res.data.data[res.data.data.length - 1].id
          } else if (this.goodsList.length > 0) {
            this.$toast('已经到底底部')
          } else {
            this.$toast('商品列表为空')
          }
        }
      })
    },
    getMore() {
      this.getGoodsList()
    }
  }
}
</script>

<style lang="scss" scoped>
.more {
  margin: 15px 0;
  font-size: 14px;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  .goods-item {
    // calc计算属性中的运算符前后都需要有空格，否则不生效
    width: calc(calc(100% / 2) - 10px);
    margin: 10px 10px 0 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      color: #333;
      margin: 10px 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      .price {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .sell {
        font-size: 13px;
      }
    }
  }
}
</style>
