<template>
  <div id="app">
    <div class="container">
      <mt-header fixed :title="$route.meta.title">
        <span slot="left" v-show="showBack" @click="goBack">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
      <transition name="fade">
        <router-view />
      </transition>
      <tab-bar />
    </div>
  </div>
</template>
<script>
import TabBar from './components/TabBar.vue'
export default {
  name: 'App',
  data () {
    return {
      selected: '',
      showBack: false
    }
  },
  created () {
    this.showBack = this.$route.path !== '/home'
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.path': {
      deep: true,
      handler (newV) {
        this.showBack = newV !== '/home'
      }
    }
  },
  components: {
    TabBar
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.container {
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
</style>
