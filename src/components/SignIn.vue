<template>
    <div>
        <div v-if="!load">
            loading..
        </div>
        <div v-else-if="anonymous === true">
            <form>
                <input v-model="username" placeholder="username" type="text" />
                <input v-model="password" placeholder="password" type="password" />
                <button @click.prevent="signIn">Sign In</button>
                <div v-if="showInvalid" id="show-invalid">Your username and password are Invalid!</div>
            </form>
        </div>
        <div v-else-if="anonymous === false">
            <h1>Welcome</h1>
            Your ID should be <b>{{id}}</b>
            Your username should be <b>{{username}}</b>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignIn',
    data() {
        return {
            load: false,
            anonymous: true,
            showInvalid: false,
            id: "",
            username: "",
            password: ""
        }
    },
    mounted() {
        this.fetchInfo();
    },
    methods: {
        signIn() {
            axios.post('/api/login_check', {
                username: this.username,
                password: this.password,
            }).then(() => {
                this.fetchInfo();
            }).catch(()=>{
                this.showInvalid = true;
            })
        },
        fetchInfo() {
            axios.get('/api/user/info').then((response) => {
                this.load = true
                this.anonymous = false;
                this.id = response.data.user.id;
                this.username = response.data.user.username;
            }).catch(() => {
                this.load = true
                this.anonymous = true
            })
        }
    }
}
</script>
<style scoped>
#show-invalid {
    background-color:red;
}
b {
    color: lightgreen;
}
</style>
