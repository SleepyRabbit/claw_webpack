<template>
  <div class="my flex flex-direction-column">

    <div class="head flex-shrink-0 flex flex-align-items-center flex-justify-content-space-between">
      <a href="#" onclick="" class="flex flex-align-items-center flex-justify-content-center"><i class="icon-back"></i>返回</a>
      <img src="../assets/img/logo.jpeg" alt="">
      <a href="#" onclick="">我的</a>
    </div>

    <div class="content-banner flex-shrink-0 flex flex-justify-content-center">
      <div class="banner-content flex flex-direction-column flex-align-items-center">
        <img src="../assets/img/user1.jpg" alt="">
        <h4>哆啦a梦</h4>
        <h5>共抓中0次</h5>
      </div>
    </div>

    <div class="user-list flex-grow-1 overflow-y-scroll">
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>我的金币</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>我的娃娃</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>我的抓取记录</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>分享</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>通知中心</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>背景音乐</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>音效</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>问题反馈</h3><i class="icon-more"></i></a>
      <a onclick="" class="flex flex-align-items-center flex-justify-content-space-between"><h3>关于我们</h3><i class="icon-more"></i></a>
    </div>

    <div class="footer">
      <a onclick="" class="flex flex-align-items-center flex-justify-content-center"><h3>退出登录</h3></a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
    }
  },
  methods: {
  },
  created: function() {
    console.log("created!");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    height: 60px;
    border-bottom: 1px solid rgb(235,235,235);
  }

  .head a {
    text-decoration: none;
    color: black;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  .head a i {
    font-size: 16px;
    font-weight: bold;
  }

  .head a:active {
    color: black;
  }

  .head img {
    width: 60%;
    height: 100%;
  }

  .content-banner {
    height: 130px;
    border-bottom: 1px solid rgb(235,235,235);
    background-color: rgb(241,233,49);
  }

  .banner-content {
    width: 80px;
  }

  .banner-content img {
    width: 80px;
    height: 80px;
    margin: 5px 0 5px 0;
    border: 2px solid white;
    border-radius: 40px;
  }

  .banner-content h4 {
    font-weight: bold;
  }

  .banner-content h5 {
    font-size: 11px;
  }

  .user-list {
    padding-top: 5px;
    background-color: rgb(235,235,235);
  }

  .user-list a {
    text-decoration: none;
    height: 45px;
    width: 100%;
    padding: 0 10px;
    background-color: white;
    border-top: 1px solid rgb(223,223,223);
  }

  .user-list a:last-child {
    border-bottom: 1px solid rgb(223,223,223);
  }

  .user-list a i {
    font-size: 16px;
  }

  .footer {
    height: 50px;
    width: 100%;
    padding-top: 5px;
    background-color: rgb(235,235,235);
  }

  .footer a {
    text-decoration: none;
    height: 45px;
    width: 100%;
    padding: 0 10px;
    background-color: white;
    border-top: 1px solid rgb(223,223,223);
    border-bottom: 1px solid rgb(223,223,223);
  }
</style>
