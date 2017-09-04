<template>
  <div class="detail overflow-y-scroll">

    <div class="banner white flex flex-justify-content-center">
      <img src="../assets/img/cat.jpg" alt="">
    </div>
    <div class="white flex flex-align-items-center flex-justify-content-center">
      <h4 class="blue">自带乾坤袋蓝色猫</h4>
    </div>

    <div class="flex flex-align-items-center flex-justify-content-center">
      <h3>最近抓中的记录</h3>
    </div>


    <div class="content">
      <div class="list flex flex-align-items-center" v-for="list in history">
        <img :src="list.avatar" alt="">
        <div>
          <h4>{{list.nick}}</h4>
          <h5>{{list.time}}</h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
//        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJpc3MiOiAidWNhc3QuY2MvYXBpIiwKICAiYXVkIjogInVjYXN0LmNjL2FwaSIsCiAgInN1YiI6ICI1OTM0OTUyZTE3ZGExNmMwN2VkNTAzODkiLAogICJuaWNrIjogIuS-r-aBqeaYnyIsCiAgImlhdCI6IDE1MDAzNzM2NDIsCiAgImV4cCI6IDE1MzE5MDk2NDIsCiAgImp0aSI6ICIxMjM0NSIsCiAgInBlcm1pdCI6IFsKICAgICJzY2VuZXM6UiIsCiAgICAidXNlcnMuZmFjZTpSIiwKICAgICJidXM6TCIsCiAgICAic2NyZWVuOkEiCiAgXQp9.-3HCmwlTQG2KMZq1PbfJ9EweDP6XcZWVwweXA1_zcAM",
        jwt: "",
        history: [],
    }
  },
  methods: {
    getJwt: function(name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results)
        return results[1] || 0;
      else
        return null;
    },
    init: function() {
      /* 获取jwt */
      this.jwt = this.getJwt('jwt') || "";
      if (!this.jwt) {
        alert("该页面不能直接在浏览器打开哦~");
        return;
      }
      //console.log(this.jwt);
      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/appclaw/games/10003",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }).then(res => {
//          console.log(res);
          this.history = res.body.history;
        },
        res => {
          alert("账户有问题哦，截图发给技术蝈蝈领金币哦~");
      });
    }
  },
  created: function() {
    console.log("created!");
    this.$nextTick(this.init, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail {
    padding: 10px;
    background-color: rgb(241,233,49);
  }

  .banner {

  }

  .white {
    background-color: white;
  }

  .blue {
    color: rgb(0,133,196);
  }

  .banner img {
    width: 200px;
    height: 200px;
  }

  .name {
    width: 100%;
    height: 30px;
    background-color: white;
  }

  h3 {
    margin: 10px 0;
  }

  .content {
    width: 100%;
    background-color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .list {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgb(235,235,235);
  }

  .list img {
    margin: 0 15px;
    height: 40px;
    /*width: 100vh;*/
    width: 40px;
  }

  .list h4 {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  .list h5 {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: rgb(192,192,192);
  }
</style>
