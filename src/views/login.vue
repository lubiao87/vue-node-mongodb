<template>
    <div class="login">
        <div class="gif-left"></div>
        <div class="gif-right"></div>
        <div class="login-top">
            <h2>{{$store.state.count}},请先登陆</h2>
            <form>
                <input type="text" value="User Id" v-model="name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User Id';}">
                <input type="password" value="password" v-model="psw" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}">
            </form>
            <div class="forgot">
                <a href="#">忘记密码</a>
                <input type="submit" value="登陆" @click.stop="submintPush">
            </div>
        </div>
        <div class="login-bottom">
            <h3>New User &nbsp;<a href="#">Register</a> Here</h3>
        </div>
    </div>
</template>

<script>
import store from '@/vuex/store';

    export default {
        store,
        data(){
            return{
              name:'',
              psw:''
            }
        },
        methods:{
            submintPush(){
              this.$router.push('/goods');
             this.$store.commit('seta');
              
            }
        }
    }
</script>

<style scoped>

.login {
  width: 32%;
  margin: 150px auto;
  position: relative;
      min-width: 350px;
}
.login h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 50px 0px 50px 0px;
  font-family: 'Droid Serif', serif;
}
.login-top {
  background: #99cdd4;
  border-radius: 25px 25px 0px 0px;
  -webkit-border-radius:  25px 25px 0px 0px;
  -moz-border-radius: 25px 25px 0px 0px;
  -o-border-radius: 25px 25px 0px 0px;
  padding: 40px 60px;
}
.login-top h2 {
  text-align: center;
  font-size: 27px;
  font-weight: 500;
  color: #F45B4B;
  margin: 0px 0px 20px 0px;
}
.login-top input[type="text"] {
	outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -o-border-radius: 25px;
  margin: 0px 0px 12px 0px;
  width: 88%;
  -webkit-appearance: none;
}
.login-top input[type="password"]{
	outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -o-border-radius: 25px;
  margin: 0px 0px 12px 0px;
  width: 88%;
  -webkit-appearance: none;
}
.forgot  a{
  font-size: 13px;
  font-weight: 500;
  color: #F45B4B;
  display: inline-block;
  border-right: 2px solid #F45B4B;
  padding: 0px 7px 0px 0px;
}
.forgot  a:hover{
  color: #818181;
}
.forgot input[type="submit"] {
  background: #F45B4B;
  color: #FFF;
  font-size: 17px;
  font-weight: 400;
  padding: 8px 7px;
  width: 20%;
  display: inline-block;
  cursor: pointer;
  border-radius: 6px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  margin: 0px 7px 0px 3px;
  outline: none;
  border: none;
}
.forgot input[type="submit"]:hover {
	background:#818181;
	transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.forgot {
  text-align: right;
}
.login-bottom {
  background: #bfca5782;
  padding: 30px 65px;
  border-radius: 0px 0px 25px 25px;
  -webkit-border-radius:  0px 0px 25px 25px;
  -moz-border-radius: 0px 0px 25px 25px;
  -o-border-radius: 0px 0px 25px 25px;
  text-align: right;
  border-top: 2px solid #AD4337;
}
.login-bottom h3 {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a {
  font-size: 25px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a:hover {
	color:#696969;
	transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.copyright {
  padding: 150px 0px 0px 0px;
  text-align: center;
}
.copyright p {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
}
.copyright p a{
  font-size: 15px;
  font-weight: 400;
  color: #E15748;
}
.copyright p a:hover{
	color: #fff;
	 transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.gif-left,.gif-right{
    width: 78px;
    height: 51px;
    position: absolute;
    top: 10px;
}
.gif-left {
    left: 0;
    background: url("../assets/gifLeft.gif") no-repeat center;
}
.gif-right{
    right: 0;
    background: url("../assets/gifRight.gif") no-repeat center;
}
</style>