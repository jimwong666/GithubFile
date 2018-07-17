<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <nuxt-link :to="{name:'about'}">about</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news',params:{newsId:666}}">news</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components:{

  }
}
</script>

<style>

</style>
