<template>
    <div class="good-list">
        <div class="">
            <a @click="sortGoods" href="javascript:;" class="sort-btn">
                排序↓↑
            </a>
        </div>
       <ul>
           <li class="item" v-for="item in goodsList">
               <a href="javascript:;">
                {{item.productName}}   <span>{{item.salePrice}} </span> 元
               </a>
           </li>
       </ul>
        
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
                pageSize:8
            }
        },
        components:{

        },
        mounted(){
            this.getGoodsList();
                
        },
        methods:{
            jump(){              
                this.isClick =true;
                this.$router.push({path:'/login'});
            },
            getGoodsList(){
                var param ={
                    page:this.page,
                    pageSize:this.pageSize,
                    sort:this.sortFlag?1:-1
                }
                axios.get("/goods",{params:param}).then((res)=>{
                    let re = res.data;
                    if(re.status == "200"){
                        this.goodsList = re.result.list ;

                        console.log(this.goodsList)
                    }else{
                        this.goodsList = "获取数据失败";
                    }
                })
            },
            sortGoods(){              
                this.sortFlag = !this.sortFlag;
                this.page = 1;
                this.getGoodsList();
            }
        },
      
    }
</script>

<style scoped>
.good-list{
    padding: 15px;
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
</style>