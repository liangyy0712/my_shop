<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">
      -
    </button>
    <input id="test" class="mui-input-numbox" type="number" :value="initCount" ref="num" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">
      +
    </button>
  </div>
</template>

<script>
// 导入mui的js代码  实现加减
import mui from '../lib/mui/js/mui.min.js'
export default {
  name: 'NumberBox',
  props:['max', 'initCount', 'goodsId'],
  data() {
    return {}
  },
  created(){

  },
  mounted(){
    //   数字输入框必须进行初始化之后才能正常使用
    mui('.mui-numbox').numbox()
  },
  methods: {
      countChanged(){
        //   将该数量返回给goodsInfo
        const count=parseInt(this.$refs.num.value)
        this.$emit('count', {count:count, id:this.goodsId})
      }
  },
  watch: {
    //   监听max，发生变化时 重新初始化  并设置max的值
      max:{
          deep:true,
          handler(newVal){
              mui('.mui-numbox').numbox().setOption('max', newVal)
          }
      }
  }

}
</script>

<style lang="scss" scoped></style>
