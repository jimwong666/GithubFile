<template>
    <div>
        我是bus1，我要向bus2发送信息，点击就送-&gt;<button @click="sendMsg">发射</button>
    </div>
</template>

<script>
    import bus from '../assets/eventBus.js';
    export default{
        methods:{
            sendMsg:function(){
                bus.$emit('sendInfo','~~~~~~~~hello！你好，我是bus1~我被发射啦~~~~~~')
            }
        }
    }
</script>

<style scoped>

</style>
