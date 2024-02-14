<script setup lang="ts">

// Refs for the login and register buttons
const loginRef = ref(false)
const registerRef = ref(false)

// Functions to handle the login and register buttons
function loginHandler() {
    loginRef.value = false
    registerRef.value = false
}
function registerHandler() {
    registerRef.value = true
    loginRef.value = true
}

const username = ref('');
const email = ref('');
const password = ref('');

const submitForm = () => {

    console.log(username.value, email.value, password.value);
};

const loginWithSteam = () => {
    window.location.href = '/auth/steam';
}

</script>

<template>
    <div class="container">
        <div class="buttons">
            <button @click="loginHandler">Login</button>
            <button @click="registerHandler">Register</button>
        </div>


        <div class="loginORregister">
            <div class="login" v-if="!loginRef">
                <h1>GC</h1>

                <form @submit.prevent="submitForm">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="email" required />

                    <label for="password">Password</label>
                    <input type="password" id=password v-model=password required />

                    <button type=submit>Login</button>
                    
                    <SteamLogin />
                </form>
            </div>

            <div class="register" v-if="registerRef">
                <h1>GC</h1>
                <p>Create a Gaming Codex account</p>
                <form @submit.prevent="submitForm">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="username" required />

                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="email" required />

                    <label for="password">Password</label>
                    <input type="password" id=password v-model=password required />

                    <button type=submit>Register</button>
                </form>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss"> // Login/Register styling
 .container {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin-top: 5rem;
     margin-left: 12rem;


     .buttons {
         display: flex;
         margin-bottom: 10px;

         button {
             margin-right: 0.5rem;
             margin-left: 0.5rem;
             padding: 10px 30px;
             border: none;
             border-radius: 5px;
             color: var(--light);
             font-size: 1rem;
             background-color: var(--darkest);

             transform-style: preserve-3d;
             border-radius: 10;

             transition:
                 .4s ease-in-out transform,
                 .4s ease-in-out box-shadow;

             &:hover {
                 cursor: pointer;
                 transform:
                     translate3d(0px, -12px, 0px);
                 box-shadow:
                     1px 1px 0 1px var(--cyan),
                     -1px 0 28px 0 rgba(34, 33, 81, 0.01),
                     54px 54px 28px -10px rgba(34, 33, 81, 0.15);
             }

         }
     }
 }

 .loginORregister {
     display: flex;

     width: 22rem;

     .login,
     .register {
         flex: 1;
         padding: 20px;
         background: var(--dark);
         box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

         p {
             color: white;
             text-align: center;
             margin-bottom: 2rem;
             margin-top: 0.5rem;
         }

         form {
             display: flex;
             flex-direction: column;

             label {
                 color: white;
                 margin-bottom: 5px;
             }

             input {
                 padding: 10px;
                 border: none;
                 border-radius: 5px;
                 margin-bottom: 10px;
                 background-color: var(--darkest);
                 color: white;

                 &:focus {
                     outline: none;
                 }
             }

             button {
                 padding: 10px 20px;
                 border: none;
                 color: white;
                 font-weight: bold;
                 cursor: pointer;
                 background: var(--cyan);
                 transform-style: preserve-3d;
                 border-radius: 10;
                 transition: all 0.3s ease-in-out;

                 &:hover {
                     cursor: pointer;
                     background-color: var(--darkest);
                 }
             }
         }
     }
 }




 .login h1,
 .register h1 {
     color: white;
     text-align: center;
 }
</style>
