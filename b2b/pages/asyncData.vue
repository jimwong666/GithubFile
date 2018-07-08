<template>
    <div>
        {{name}}
        <br>
        <h1>{{info.name}}</h1>
        <h1>{{info.age}}</h1>
        <h1>{{info.job}}</h1>
        <h1>{{info.love}}</h1>
        <br>
        <nuxt-link :to="{name:'index'}">home</nuxt-link>
    </div>
</template>
<script>
    import axios from 'axios';
    
    export default{
        data(){
            return{
                name:'hello world!'
            }
        },
        // promise方法
        // asyncData(){
        //     return axios.get('https://www.easy-mock.com/mock/5b3aeb3ca93cdc049e389e2e/mall/query')
        //     .then((res)=>{
        //         console.log(res.data);
        //         return {info:res.data.data}
        //     })
        // },

        // async方法
        async asyncData(){
            let {data} = await axios.get('https://www.easy-mock.com/mock/5b3aeb3ca93cdc049e389e2e/mall/query');
            return {info:data.data}
        }
    }
</script>