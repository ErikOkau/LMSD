<script setup lang="ts">

const modeShift = ref(false)

const modeShiftHandler = (e: any) => {
    modeShift.value = !modeShift.value

    if (modeShift.value) {
        e.target.setAttribute('src', '/img/dark_mode.svg')
        document.documentElement.style.setProperty('--darkest', '#fff')
        document.documentElement.style.setProperty('--dark', '#000')
        document.documentElement.style.setProperty('--light', '#000')
    } else {
        e.target.setAttribute('src', '/img/light_mode.svg')
        document.documentElement.style.setProperty('--darkest', '#162946')
        document.documentElement.style.setProperty('--light', '#fff')
        document.documentElement.style.setProperty('--dark', '#284368')
    }
    }

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
            <NuxtLink class="Login" to="/">Log in</NuxtLink>
            <img src="/img/light_mode.svg" alt="light_mode" @click="modeShiftHandler" :data="modeShift">

            <div class="languageSelect_dropdown">
                <select name="languageSelect" id="languageSelect">
                    <option value="english">English</option>
                    <option value="norwegian">Norwegian</option>
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
                    color: var(--light);
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
            border-radius: none;

            option {
                width: 100%;
                border-radius: none;
                background-color: var(--dark);
                color: white;
            }

            &:hover {
                cursor: pointer;
                background-color: var(--dark);
            }
        }
    }
}
</style>