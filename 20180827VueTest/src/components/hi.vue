<template>
  <div class="hi">
    <hr>
    <p>你好~我是子组件[hi]</p>
    <p>父组件传过来的msg_1:{{Msg_1}}</p>
    <p>父组件传过来的msg_2:{{Msg_2}}</p>
    <p>computed计算属性(Msg_1 + Msg_2)：<input type="text" v-model="msgInit"></p>

    <button @click="parentEvent">在父元素中触发子元素向父元素传值</button>
    <p>值为：{{ccData}}</p>
    <hiii @childEvent="watchChildEvent" ref="childComp"></hiii>
  </div>
</template>

<script>
import hiii from './hiii.vue'
export default {
  name: 'Hi',
  components:{
    hiii
  },
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
      // msgInit: this.Msg_1 + this.Msg_2,
      ccData:''
    }
  },
  // 这是第二种 $on 的写法，第一种写法是写在组件里（上面hiii组件那样）
  // mounted(){
  //   var self = this;
  //    this.$refs['childComp'].$on('childEvent',function(val){
  //      self.ccData = val;
  //      console.log(val)
  //   })
  // },
  methods:{
    watchChildEvent:function(val){
      this.ccData = val;
    },
    parentEvent:function(){
      this.$refs['childComp'].target();
    }
  },
  computed:{
    msgInit:{
      get:function(){
        return this.Msg_1 + this.Msg_2;
      },
      // set:function(newVal){
      //   
      //   this.Msg_2 = newVal;
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{
  background: #777;
}
</style>
