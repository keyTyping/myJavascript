<!--以后项目的根组件-->
<template>
    <!--主要放html的页面结构-->
    <!--<span v-text="msg" class="red"></span>-->
    <div>{{msg}}</div>
</template>

<script>
//    负责导出.vue这个组件对象(Vue对象)
    export default {
        data(){
            return{
                msg: 'hello Vue.js!'
            }
        },
        methods:{

        },
        created(){
//            ES6写法

        }
    }
</script>

<style scoped>
    /*当前页面的CSS样式,scoped表示其中的CSS代码只是在当前组件页面上有效*/
    .red{
        color: red;
    }
</style>
