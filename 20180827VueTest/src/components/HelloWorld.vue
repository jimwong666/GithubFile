<template>
  <div class="hello">
    <p>你好~我是helloWorld组件</p>
    <input type="text" placeholder="props向子组件传值" v-model="msg_1">
    <hi Msg_1 = 'hahaha!' :Msg_2 = this.msg_1></hi>
    <yo Msg_1 = 'hahaha!' :Msg_2 = this.msg_1></yo>
  </div>
</template>

<script>
import hi from "./hi.vue";
import yo from "./yoyoyo.vue";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg_1:''
    }
  },
  components:{
    hi,
    yo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color: #fff;
  background: #555
}
</style>
