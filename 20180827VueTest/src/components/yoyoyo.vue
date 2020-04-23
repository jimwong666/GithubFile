<template>
  <div class="hi">
    <hr>
    <p>你好~我是子组件[hi]</p>
    <p>父组件传过来的msg_1:{{Msg_1}}</p>
    <p>父组件传过来的msg_2:{{Msg_2}}</p>
    <p>Msg_2:<input type="text" v-model="msgInit"></p>
    <p ref="babala">watch监听(watch可监听子组件中msgInit的变化)：{{msgInit}}</p>
    <button @click="addText">+</button>

    
    <p>
      <span>我是子组件，子子组件传递过来的值是：{{childVal}}</span>
    </p>
    <hohoho @childEvent="reseive"></hohoho>
  </div>
</template>

<script>
import hohoho from './hohoho.vue'
export default {
  components:{
    hohoho
  },
  name: 'yoyoyo',
  // props: ["msg"],
  props: {
    Msg_1:{
      type: String,
      required:true,
      default: 'hello'
    },
    Msg_2:{
      type: String,
      required:true,
      default: 'hello'
    }
  },
  data () {
    return {
      msgInit: this.Msg_2,
      childVal:''
    }
  },
  methods:{
    reseive:function(val){
      this.childVal = val;
    },
    addText: function(val){
      this.msgInit += "+";
    }
  },
  watch:{
    Msg_2:function(){
      this.msgInit = this.Msg_2;
    }
  },
  // beforeMount(){
  //   console.log(this.$refs.babala)
  // },
  // mounted() {
  //   console.log(this.$refs.babala)
  // },
  // beforeUpdate(){
  //   console.log(this.$refs['babala'])
  // },
  // updated(){
  //   console.log(this.$refs.babala)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{
  background: #777;
}
</style>
