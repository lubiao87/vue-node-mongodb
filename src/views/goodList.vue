<template>
    <div>
       <ul>
           <li class="item" v-for="item in goodsList">
               <a href="javascript:;">
                {{item.productName}}    
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
                goodsList:null
            }
        },
        methods:{
            jump(){              
                this.isClick =true;
                this.$router.push({path:'/login'});
            },
      
        },
        mounted(){
            
                axios.get("/goods").then((res)=>{
                    let re = res.data;
                    if(re.status == "200"){
                        this.goodsList = re.result.list ;

                        console.log(this.goodsList)
                    }else{
                        this.goodsList = "获取数据失败";
                    }
                })
        }
    }
</script>

<style scoped>

</style>