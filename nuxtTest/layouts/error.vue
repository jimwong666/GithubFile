<template>
    <div>
        <h2 v-if="error.statusCode == 404">亲~网页没找到哦~</h2>
        <h2 v-else>亲~服务器遇到麻烦了~</h2>
    </div>
</template>
<script>
    export default{
        props:['error']
    }
</script>