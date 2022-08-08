<template>
 <div>
   <button @click='sendToParent()'>Change Username</button>
    <!--<p style="color: purple">{{username}} </p>-->
 </div>
</template>
 
<script>
    export default {
        name: "Child",
        data(){
            return {
                username: 'Alejandro',
            }
        },
        methods: {
            sendToParent() {
                console.log("Send to parent:" + this.username);
                this.$emit('sendMessage', this.username);
            },
            changeUsername() {
                console.log("Change user to:" + this.username);
                this.$emit('sendMessage', this.username);
            }
        },
        mounted(){
            this.sendToParent();
        },
    };
</script>