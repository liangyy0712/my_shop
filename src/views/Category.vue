<template>
<div class="container_c">
  <div class="category">
    <div class="menu-left">
      <ul>
        <li
          v-for="(item, index) in categorylist"
          :key="index"
          class="menu-item"
          :class="{ current: currentIndex === index }"
          @click="clickItem(index)"
        >
          <p class="text">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="menu-right" ref="itemList">
      <ul>
        <li class="cate" v-for="(item, index) in categorylist" :key="index">
          <h4 class="cate-title">{{ item.name }}</h4>
          <ul class="cate-item">
            <li v-for="(menu, menuIndex) in item.sub" :key="menuIndex">
              <router-link
                :to="'/goodslist/' + menu.id"
                class="cate-item-wrapper"
              >
                <div class="cate-item-img">
                  <img :src="menu.image" />
                </div>
                <span>{{ menu.name }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
// 导入滚动插件
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data() {
    return {
      categorylist: [],
      // 记录点中一级索引项
      currentIndex: 0,
      // 保存二级分类  li离top的距离
      liTopList: []
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    async getCategoryList() {
      const { data: result } = await this.$http.get('category')
      if (result.code === 0) {
        this.$toast('result.msg')
      } else {
        this.categorylist = result.data
      }
    },
    clickItem(index) {
      this.currentIndex = index
      // console.log('index'+index)
      // 根据索引定位右侧盒子定位值  设置偏移  x轴和y轴偏移  向下滚动则是-值
      const y = -this.liTopList[index]
      // console.log('点了' + y)
      this.rightBScroll.scrollTo(0, y)
    },
    _initBScroll() {
      // 初始化盒子的类名  可点击 可鼠标滚动
      this.leftBScroll = new BScroll('.menu-left', {
        click: true,
        mouseWheel: true,
        probeType: 3
      })

      this.rightBScroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true,
        // 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        probeType: 3
      })
      // 监听二级分类滚动位置pos
      this.rightBScroll.on('scroll', pos => {
        const scrollY = Math.abs(pos.y)
        // console.log('滚动到' + scrollY)
        // 判断滚动区域
        for (var i = 0; i < this.liTopList.length - 1; i++) {
          if (scrollY >= this.liTopList[i] && scrollY < this.liTopList[i + 1]) {
            this.currentIndex = i
            // console.log('我现在滚动到第'+index+'个位置')
            // console.log('我现在滚动到第' + this.currentIndex + '个位置')
          }
        }
      })
    },
    _initRightHight() {
      const itemArray = []
      let top = 0
      // 将第一个二级分类定位值加入itemArray
      itemArray.push(top)
      // 获取所有二级分类盒子
      const allList = this.$refs.itemList.getElementsByClassName('cate')
      allList.forEach(element => {
        top += element.clientHeight
        itemArray.push(top)
      })
      this.liTopList = itemArray
    }
  },
  watch: {
    categorylist() {
      this.$nextTick(() => {
        this._initBScroll()
        this._initRightHight()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  // 设置列表前图标为none
  list-style: none;
}
.category {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .menu-item {
      height: 54px;
      width: 100%;
      .text {
        width: 100%;
        // 设置撑满
        line-height: 54px;
        margin-bottom: 0;
      }
    }
    // 选中样式-》字体标红
    .current {
      height: 54px;
      width: 100%;
      background-color: #fff;
      .text {
        color: red;
      }
    }
  }
}
.menu-right {
  flex: 1;
  background: #fff;
  .cate {
    height: 100%;
    // 标题  居左 字体黑丝加粗 内边距为10px
    .cate-title {
      margin: 0;
      text-align: left;
      font-size: 14px;
      color: #333;
      font-weight: bold;
      padding: 10px;
    }
    // 二级列表  上7 右左10 下10  只在flex下起作用flex-flow：按行 超出就下一行
    .cate-item {
      padding: 7px 10px 10px;
      display: flex;
      overflow: hidden;
      flex-flow: row wrap;
      li {
        width: 33.3%;
        .cate-item-wrapper {
          .cate-item-img {
            width: 100%;
            img {
              width: 70px;
              height: 70px;
            }
          }
          span {
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
