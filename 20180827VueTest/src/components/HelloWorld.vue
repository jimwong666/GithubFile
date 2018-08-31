<template>
  <div class="hello">
    <p>你好~我是helloWorld组件</p>
    <input type="text" placeholder="props向子组件传值" v-model="msg_1" @input="achieveVmodelFunc">
    <hi Msg_1 = 'hahaha!' :Msg_2 = this.msg_1></hi>
    <yo Msg_1 = 'hahaha!' :Msg_2 = this.msg_1></yo>
    <hr>
    <hr>
    <hr>
    <hr>
    <bus_1></bus_1>
    <bus_2></bus_2>
  </div>
</template>

<script>
import hi from "./hi.vue";
import yo from "./yoyoyo.vue";
import bus_1 from "./bus_1.vue";
import bus_2 from "./bus_2.vue";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg_1:''
    }
  },
  components:{
    hi,yo,bus_1,bus_2
  },
  methods:{
    // v-model原理
    achieveVmodelFunc(e){
      console.log('[e.target.value = '+ e.target.value + '],这样就是实现了v-model（@input-> :value = e.target.value -> v-model）')
    }
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
