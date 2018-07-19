<template>
    <div>
         <div id="contPar" class="contPar" v-bind:class="{leftTip: isClick}">      
          <div class="page1" style="z-index:1;" @click="jump">
              <div class="bg-img"></div>
              <div class="title0">行业智慧能力平台</div>
              <div class="title1">旅游、交通、气象、公共安全、大数据</div>
              <div class="imgGroug">
                  <ul>
                      <img alt="" class="img0 png" src="../assets/page10.png">
                      <img alt="" class="img1 png" src="../assets/page11.png">
                      <img alt="" class="img2 png" src="../assets/page12.png">
                  </ul>
              </div>
          </div>
        </div>
        
    </div>

</template>

<script>
    export default {
        data(){
            return{
                isClick:false
            }
        },
        methods:{
            jump(){
                this.isClick =true;
                this.$router.push({path:'/login'})
            }
        }
    }
</script>

<style scoped>
.login-view{
    width: 400px;
    height: 500px;
    float: right;
    /* border: 1px solid #fff; */
    position: absolute;
    top: 100px;
    right: 20px;
}
.page1 {
    position: relative;
}

.contPar {
    width: 703px;
    height: 500px;
    position: relative;
    top:100px;
    left: 50%;
    margin-left: -350px;
}
.leftTip{
    left: 30%;
}
.contPar .imgGroug {
    position: absolute;
    top: 150px;
    left: 10px;
    width: 100%;
    perspective: 1200px;

    -webkit-perspective: 1200px;
}

.contPar .imgGroug ul {
    width: 170px;
    height: 170px;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    animation: move 5s infinite linear;
    -moz-animation:move 5s infinite linear;	/* Firefox */
    -webkit-animation: move 5s infinite linear;	/* Safari 和 Chrome */
    -o-animation: move 5s infinite linear;	/* Opera */

    transform-origin: 80px 0 0px;
   
    -webkit-transform-origin: 80px 0 0px;
}

.contPar .imgGroug ul .png {
    position: absolute;
    top: 0;
    left: 0;
}

.contPar .imgGroug .img0 {
    transform: translate3d(170px, 0px, -100px) rotateY(120deg);
}

.contPar .imgGroug .img1 {
    transform: translate3d(0, 0, 200px);
}

.contPar .imgGroug .img2 {
    transform: translate3d(-170px, 0px, -100px) rotateY(240deg);
}

.bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 700px;
    height: 600px;
    background: url("../assets/page13.jpg") no-repeat center -100px;
    z-index: -1;
}

@keyframes move {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
}

@-webkit-keyframes move {
    from {
        -webkit-transform: rotateY(0deg);
    }
    to {
        -webkit-transform: rotateY(360deg);
    }
}


.title0
 {
   font-size: 30px;
    color: #2ec0f6;
  margin-bottom: 20px;
}
.page1:hover{
  cursor: pointer;
}
.page1:hover .bg-img{
  cursor: pointer;
     animation: Tremble 0.4s  ease forwards;
    -moz-animation:Tremble 0.4s  ease forwards;	/* Firefox */
    -webkit-animation: Tremble 0.4s  ease forwards;	/* Safari 和 Chrome */
    -o-animation: Tremble 0.4s  ease forwards;	/* Opera */

}

@keyframes Tremble {
  0%{
      background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  10%{
    background: url(../assets/page13.jpg) no-repeat -10px -100px;
  }
  30%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  40%{
    background: url(../assets/page13.jpg) no-repeat -30px -100px;
  }
  50%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  60%{
    background: url(../assets/page13.jpg) no-repeat 10px -100px;
  }
  80%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
   90%{
    background: url(../assets/page13.jpg) no-repeat 30px -100px;
  }
  100%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
}

@-webkit-keyframes Tremble {
     0%{
      background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  10%{
    background: url(../assets/page13.jpg) no-repeat -10px -100px;
  }
  30%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  40%{
    background: url(../assets/page13.jpg) no-repeat -30px -100px;
  }
  50%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
  60%{
    background: url(../assets/page13.jpg) no-repeat 10px -100px;
  }
  80%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
   90%{
    background: url(../assets/page13.jpg) no-repeat 30px -100px;
  }
  100%{
    background: url(../assets/page13.jpg) no-repeat center -100px;
  }
}

</style>