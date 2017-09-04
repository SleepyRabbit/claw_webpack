<template>
  <div class="list box flex flex-direction-column">

    <div class="head flex-shrink-0">

    </div>

    <div class="content flex-grow-1 flex flex-direction-column overflow-y-scroll">
      <!--<div class="content-banner flex-shrink-0">-->
      <!--<img src="./img/banner1.jpg" alt="" class="box">-->
      <!--</div>-->

      <div class="content-list flex-grow-1 flex flex-wrap-wrap">

        <div class="list-container flex flex-justify-content-center" v-for="(list, index) in glbList">
          <a href="#" @click="onSelect(index)">
            <div class="img-container flex flex-direction-column">
              <img :src=list.img alt="">
              <h5 class="flex-grow-1" :class="{'none': list.scene.state != 'ready'}">
                空闲中
              </h5>
              <h5 class="flex-grow-1" :class="{'none': list.scene.state != 'busy'}">
                游戏中
              </h5>
              <h5 class="flex-grow-1" :class="{'none': list.scene.state != 'sleep'}">
                待机中
              </h5>
            </div>
            <h4>{{list.title}}</h4>
            <h5>{{list.fee}}/次</h5>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      glbList: [],
      jwt: '',
    }
  },
  methods: {
    onSelect: function(index) {
      //console.log(index);
      //这里是关键代码，将选取的游戏信息提交给native
      window.WebViewJavascriptBridge.callHandler(
        'onListItemSelect',
        this.glbList[index],
        (responseData) => {
          console.log(responseData);
        }
      );
    },
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
        url: "https://ucast.cc/api/v1/games",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }).then(res => {
//          console.log(res);
          this.glbList = res.body;
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
  .head {
    height: 80px;
    background-color: rgb(241, 233, 49);
  }

  .content {
  }

  .content-banner {
    height: 140px;
    border-top: 2px solid white;
    background-color: red;
  }

  .content-list {
    width: 100%;
    padding: 10px;
  }

  .list-container {
    width: 50%;
    height: 250px;
  }

  .list-container a {
    text-decoration: none;
    width: 90%;
    color: black;
  }

  .list-container a:active {
    color: black;
  }

  .img-container {
    height: 75%;
    border: 1px solid pink;
  }

  img {
    width: 100%;
    height: 90%;
  }

  .list-container a h4 {
    margin-left: 10px;
    margin-top: 3px;
  }

  .list-container a h5 {
    margin-left: 10px;
  }

  .none {
    display: none;
  }
</style>
