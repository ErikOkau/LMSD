<script setup lang="ts">

function loginWithSteam() {
    window.location.href = "http://localhost:7069/api/auth/steam";
}

</script>

<template>
    <div class="Steam_login">
      <h1>Steam Login</h1>
      <img @click="loginWithSteam" src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png" alt="Steam Login" target="_blank"/>
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