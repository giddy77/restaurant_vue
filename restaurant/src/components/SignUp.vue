<template>
    <div>
        <img class="logo" alt="Vue logo" src="../assets/logo1.webp">
        <h1>Sign up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter name">
            <input type="text" v-model="email" placeholder="Enter email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button @click="signup">Signup</button>
            <p><router-link to="login">Already have an account</router-link></p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:"SignUp",
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
       async signup(){

            let result = await axios.post('http://127.0.0.1:3000/user',{
                name: this.name,
                password:this.password,
                email: this.email
            });
            console.warn(result)

            if(result.status==201){
                let name = localStorage.setItem('user-info', JSON.stringify(result.data));
                console.log(name)
                this.$router.push({name:'HomePage'});
            }
        },
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
