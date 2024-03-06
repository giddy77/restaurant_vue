<template>
     <HeaderComponent/>
    <h1>Welcome to Homepage</h1>
   
    
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'HomePage',
    components:{
        HeaderComponent
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');

        if(!user)
        {
            this.$router.push({name:"SignUp"});
        }
    }
}
</script>