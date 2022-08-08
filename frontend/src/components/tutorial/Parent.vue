<template>
 <div>
    <Child @sendMessage="receiveMessage($event)"/>
    Message: {{message}} 
    <div>
        <h2 style="color: black"  :username="user.username" @changeUsername="changeName($event)"> User: {{user.username}} </h2>
        <h3 style="color: green"> User: {{user.username}}</h3>
    </div>
</div>
</template>

<script>

import Child from "../tutorial/Child.vue";

export default {
    name: "Parent",
    data(){
        return{
            message: '',
            user: {
                username: 'Perico',
            }
        }
    },
    methods: {
        changeName(username) {
            this.user.username = username;
            console.log("Name after change", this.user.username)
            return this.user.username;
        },
        receiveMessage(data){
            console.log("Message from child", data);
            this.user.username = data;
            this.message = data
        },
    },
    components:{
        Child,
    },
}
</script>