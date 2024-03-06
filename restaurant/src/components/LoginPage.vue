<template>
    <div>
        <img class="logo" alt="Vue logo" src="../assets/logo1.webp">
        <h1>Login</h1>
        <div class="register">
            <input type="text" v-model="email" placeholder="Enter email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button @click="login">Login</button>
            <p><router-link to="signup">Sign Up</router-link></p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"LoginPage",
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(`http://127.0.0.1:3000/user?email=${this.email}&password=${this.password}`)
            console.warn(this.email, this.password)
            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'});
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>