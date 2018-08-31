<template>
    <div>
        <hr>
        我是bus2，我要从bus1接收信息，信息为-&gt;<span>{{msg}}</span>
    </div>
</template>

<script>
    import bus from '../assets/eventBus.js';
    export default{
        data(){
            return{
                msg:" "
            }
        },
        mounted(){
            var self = this;
            bus.$on('sendInfo',function(newVal){
                self.msg = newVal;
            });
        }
    }
</script>

<style scoped>

</style>
