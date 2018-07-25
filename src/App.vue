<template>
  <div id="app">
     <router-view name="transfromViews"/> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  
   width: 100%;
  height: 960px;
  }
 
body{width: 100%; height: 100%; margin: 0;padding: 0;font-family: "微软雅黑"; background-color: #191c2d; color: #fff;}
body,html{-webkit-text-size-adjust: none;width: 100%;height: 100%;}
*{text-decoration: none;list-style: none;box-sizing: border-box;}
img{border: 0px;}
ul,li,dl,dd,dt,p,ol,h1,h2,h3,h4,h5{font-size: 14px;font-weight: 200;padding: 0;margin: 0;}
.wrap{margin: 0 auto;}
.fl{float: left;}
.fr{float: right;}
.index{overflow: hidden;}
.clr{clear:both; height:0px; width:100%; font-size:1px; line-height:0px; visibility:hidden; overflow:hidden;}
.pointer{cursor:pointer;}
a,input,button{ outline:none; }
::-moz-focus-inner{border:0px;}
a:link {color:#0f0;text-decoration:none;} 
a:visited {color: #FFFF00; text-decoration:none;} 
a:hover {color: #00FF00; } 
a:active {color: #0000FF; text-decoration:underline;}
a{color: #000;}
.wrapper{clear: both;width: 100%;}
table { border-collapse:collapse; }
/* word-break:break-all 文字换行 */
/*white-space:nowrap 文字不换行*/
</style>
