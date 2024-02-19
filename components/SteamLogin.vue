<script setup lang="ts">
function loginWithSteam () {
    
}
</script>

<template>
    <div class="Steam_login">
      <h1>Steam Login</h1>
      <img @click="loginWithSteam" src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png" alt="Steam Login" />
      <NuxtLink to="/terms_of_use">Terms of use</NuxtLink>
    </div>
</template>

<style scoped lang="scss">

.Steam_login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    h1 {
        color: white;
        font-size: 1rem;
        margin-bottom: 10px;
    }

    a {
        color: grey;
        font-size: 0.8rem;
        margin-top: 10px;
        font-style: underline;
    }

    img {
        width: 200px;
        cursor: pointer;
    }
}

</style>