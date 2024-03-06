<template>
    <div class="nav">
        <a href="">Home</a>
        <router-link to="add">Add restaurant</router-link>
        <router-link to="update">update restaurant</router-link>
        <a @click="logout" href="">Logout</a>
    </div>
</template>
<script>
export default{
    name:"HeaderComponent",
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:"Login"})
        }
    }
}
</script>
<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>