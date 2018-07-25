<template>
    <div class="good-list">
        
        <div class="">
            <a @click="sortGoods" href="javascript:;" class="sort-btn">
                排序↓↑
            </a>
        </div>
        <ul class="img-list">
            <li class="item" v-for="item in goodsList">
                <a href="javascript:;">
                    {{item.productName}}   <span>{{item.salePrice}} </span> 元
                </a>
                <img :src="imgUrl+item.productImage" alt="">
                <button class="add-cart-btn">加入购物车</button>
            </li>
            
        </ul>
        <!-- loadMore 鼠标滚动时候加载方法 busy为true禁用 10滚动距离下边的距离 -->
        <div class="load-more" v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            {{loadText}}
        </div>
      
        
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return{
                isClick:false,
                goodsList:[],
                sortFlag:true,
                page:1,
                pageSize:8,
                busy:true,
                imgUrl:this.URL.imgUrl,
                loadText:""
            }
        },
        components:{

        },
        mounted(){
            this.getGoodsList(false);
                
        },
        methods:{
            jump(){              
                this.isClick =true;
                this.$router.push({path:'/login'});
            },
            //获取数据
            getGoodsList(flag){             
                var param ={
                    page:this.page,
                    pageSize:this.pageSize,
                    sort:this.sortFlag?1:-1
                }
                axios.get("/goods",{params:param}).then((res)=>{
                    let re = res.data;
                    if(re.status == "200"){                     
                        if(flag){
                            this.goodsList = this.goodsList.concat(re.result.list ) ;
                            if(re.result.count == 0){
                                this.busy = true;
                            }else{
                                this.busy = false;
                            }
                        }else{
                            this.goodsList = re.result.list ;
                            this.busy = false;
                        }
                        console.log(re.result);
                        console.log(re.result.count+' ' + this.busy);
                    }else{
                        this.goodsList = "获取数据失败";
                        this.busy = true;
                    }
                })
            },
            sortGoods(){              
                this.sortFlag = !this.sortFlag;
                this.page = 1;
                this.getGoodsList();
            },
            loadMore(){
                this.busy = true;           
                 setTimeout(() => {
                   this.page++;
                   this.getGoodsList(true);
                 this.busy = false;
                }, 1000);
               
            }
        },
        watch:{                 //监听属性变化
          busy(val,old){
              this.loadText= val?"":"加载中...";
          }
              
        }
    }
</script>

<style scoped>
.good-list{
    padding: 15px;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}
   .item  a{
       width: 300px;
       height: 30px;
        display: block;
        color: #fff;
    }
     a span{
        color: yellowgreen;
    }
    .sort-btn{
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: block;
        border: 1px solid forestgreen;
        margin-bottom: 15px;
    }
    .sort-btn:hover{
        background: green;
    }
    .img-list {
        width: 100%;
        /* height: 100%; */
        /* overflow: scroll; */
    }
    .img-list::after{
        clear: both;
        content: "";
        height: 0;
        display: block;
        visibility: hidden;
    }
    .img-list .item{
        width: 25%;
        float: left;
        padding:  20px;
        position: relative;
        margin-top: 40px;
    }
    .img-list .item:hover{
        cursor: pointer;
    }

    .img-list .item img{
        width: 100%;
        margin-bottom: 5px;
    }
    .add-cart-btn {
        display: block;      
        width: 100%;
        height: 40px;
        border: 2px solid green;     
        background-color: #fff;
    }
    .add-cart-btn:hover{
        background-color: green;
        cursor: pointer;
    }
    .load-more{
        height: 50px;
        line-height: 50px;
        width: 100%;
        text-align: center;
        display: block;
    }
</style>