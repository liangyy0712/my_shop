<template>
  <div class="container">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news">
          <img src="../assets/img/square/menu1.png">
          <div class="mui-media-body">新闻资讯</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news">
          <img src="../assets/img/square/menu2.png">
          <div class="mui-media-body">图片分享</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news">
          <img src="../assets/img/square/menu3.png">
          <div class="mui-media-body">商品购买</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news">
          <img src="../assets/img/square/menu4.png">
          <div class="mui-media-body">留言反馈</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/category">
          <img src="../assets/img/square/menu5.png">
          <div class="mui-media-body">视频分区</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news">
          <img src="../assets/img/square/menu6.png">
          <div class="mui-media-body">联系我们</div></router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Square'
}
</script>
<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
    background-color:#fff;
    border: none;
    img{
    width: 45px;
    height: 45px;
}
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    border:0;
}
.mui-media-body{
    font-size:14px;
}

</style>
