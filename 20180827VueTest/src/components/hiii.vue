<template>
  <div class="hiii">
    <hr>
    <p>你好~我是子子组件，[hi]的子组件，值是：{{childData}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hiii',
  // props: ["msg"],
  
  data () {
    return {
      childData:'我是子子组件，来打我啊~！'
    }
  },
  methods:{
    target:function(){
      this.$emit('childEvent',this.childData)
    }
  },
  computed:{
    msgInit: function(){
      return this.Msg_1 + this.Msg_2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hiii{
  background: #999
}
</style>
