<script setup lang="ts">

const loginRef = ref(false)
const registerRef = ref(false)

const loginRegisterHandler= () => {
    if (loginRef.value) {
        loginRef.value = false
    }
    if (!registerRef.value) {
        registerRef.value = true
    }
}

const buttonRefs = ref([
    {
        name: 'Login'
    },
    {
        name: 'Register'
    }
])

</script>

<template>
    <div class="login_register">
        <div class="login_register">
            <button @click="loginRegisterHandler" v-for="buttons in buttonRefs">{{ buttons.name }}</button>
        </div>
        <div class="loginORregister">
            <div class="login" v-if="loginRef">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="Username">
                    <input type="password" placeholder="Password">
                    <button>Login</button>
                </form>
            </div>
            <div class="register" v-if="registerRef">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder="Username">
                    <input type="password" placeholder="Password">
                    <input type="password" placeholder="Repeat Password">
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>


</template>

<style scoped lang="scss">

</style>
