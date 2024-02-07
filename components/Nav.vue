<script setup lang="ts">

const modeShift = ref(false)

const img = ref('/img/light_mode.svg')
const darkest = ref('#162946')
const dark = ref('#284368')
const light = ref('#fff')
const cyan = ref('#4ca1af')


function modeShiftHandler(e: any) {
    modeShift.value = !modeShift.value

    if (modeShift.value) {
        img.value = '/img/dark_mode.svg'
        darkest.value = '#fff'
        dark.value = '#000'
        light.value = '#000'
        cyan.value = '#162946'
    } else {
        img.value = '/img/light_mode.svg'
        darkest.value = '#162946'
        dark.value = '#284368'
        light.value = '#fff'
        cyan.value = '#4ca1af'
    }
}   
onMounted(() => {
    watchEffect(() => {
        document.documentElement.style.setProperty('--darkest', darkest.value)
        document.documentElement.style.setProperty('--dark', dark.value)
        document.documentElement.style.setProperty('--light', light.value)
    })
})
</script>

<template>
    <nav>
        <div class="left_navbar">
            <h1 class="logo">Gaming Codex</h1>
            <div class="navigation_links">
                <NuxtLink to="/">Profiles</NuxtLink>
                <NuxtLink to="/">Leaderboards</NuxtLink>
            </div> 
        </div>
        <div class="right_navbar">
            <NuxtLink class="Login" to="/login">Log in</NuxtLink>
            <img :src="img" alt="light_mode" @click="modeShiftHandler" :data="modeShift">    

            <div class="languageSelect_dropdown">
                <select name="languageSelect" id="languageSelect">
                    <option class="lang" value="english">English</option>
                    <option class="lang" value="norwegian">Norwegian</option>
                </select>
            </div>
        </div>
      
    </nav>
</template>

<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    height: 10vh;

    .left_navbar {
        display: flex;
        align-items: center;
        justify-content: center;

        .navigation_links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-left: 2rem;


            a {
                transition: all 0.3s ease-in-out;
                color: var(--light);
                text-decoration: none;
                padding: 0.5rem;
                transition: all 0.3s ease-in-out;
                border-radius: 10;
                text-decoration: none;

                &:hover {
                    cursor: pointer;
                    color: white;
                    background-color: var(--dark);
                }
            }
        }

        .logo {
            transition: all 0.3s ease-in-out;
            color: var(--light);

            &:hover {
                cursor: pointer;
                box-shadow: 0px 1px 0px 0px;
                color: var(--light);
            }
        }
    }

    .right_navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;

        .Login {
            color: var(--light);
            padding: 0.5rem;
            transition: all 0.3s ease-in-out;
            border-radius: 10;
            text-decoration: none;

            &:hover {
                cursor: pointer;
                background-color: var(--dark);
                color: #fff;
            }
        }

        img {
            width: 30px;
            margin: 0 1rem;
            transition: all 0.3s ease-in-out;
            padding: 0.3rem;
            border-radius: 10;

            &:hover {
                cursor: pointer;
                box-shadow: 1px 1px 2px 2px var(--dark);
                background-color: var(--dark);
            }
        }

        select {
            padding: 0.5rem;
            border-radius: 10;
            background-color: var(--dark);
            color: white;
            border: none;
            transition: all 0.3s ease-in-out;
        
            &:hover {
                cursor: pointer;
                background-color: var(--dark);
            }

            &:focus {
                outline: none;
            }
        }
    }
}
</style>