<template>
    <div>
        <h2>NEWS index page</h2>
        <p>
            newsId:{{$route.params.newsId}}  
        </p>
        <ul>
            <li>
                <nuxt-link :to="{name:'index'}">home</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name:'about'}">about</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name:'news-id',params:{id:123,title:'i am news'}}">news-1</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name:'news-id',params:{id:456}}">news-2</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        transition:'page1'
    }
</script>