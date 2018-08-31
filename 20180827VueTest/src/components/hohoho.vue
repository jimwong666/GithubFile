<template>
  <div class="ccCompent">
    <hr>
    <p>你好~我是子子组件，[yoyoyo]的子组件，值是：i am childCompent!</p>
    <button @click="emitEvent" style="cursor:pointer;">在子组件中触发向父组件传值</button>
  </div>
</template>

<script>
export default {
  name: 'hohoho',
  
  data () {
    return {
      emitData:'i am childCompent!'
    }
  },
  methods:{
    emitEvent:function(){
      this.$emit('childEvent',this.emitData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ccCompent{
  background: #999;
}
</style>
