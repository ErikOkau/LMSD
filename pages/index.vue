<script setup lang="ts">

const categories = ref<{
    username: string;
    avatar: string;
    steamLevel: number;
    achievement: string;
}[]>([]);

const searchId = ref('');


async function searchUser(id: string) {
    7;
    const response = await fetch(`http://localhost:7069/api/user/${id}`);
    const user = await response.json();

    const steamLevelResponse = await fetch(`http://localhost:7069/api/steam/level/${id}`);
    const steamLevel = await steamLevelResponse.json();

    const achievementsResponse = await fetch(`http://localhost:7069/api/steam/achievements/:id`);
    const achievements = await achievementsResponse.json();
    console.log({
        username: user.username,
        avatar: user.avatar,
        steamLevel: steamLevel.level,
        achievement: achievements.achievement
    });
    categories.value = [];
    categories.value.push({
        username: user.username,
        avatar: user.avatar,
        steamLevel: steamLevel.level,
        achievement: achievements.achievement
    });
}


watch(searchId, async (newId, oldId) => {
  if (newId !== oldId) {
    await searchUser(newId);
  }
});

</script>

<template>
    <div class="outer_container">
        <div class="search">
            <label for="search">Enter SteamID / Username</label>
            <input v-model="searchId" type="text" id="search" name="search" placeholder="Type here ...">
        </div>
        <div class="filters">
            <select class="filter" id="filter" name="filter">
                <option value="">No filters</option>
                <option value="country">Country</option>
            </select>
        </div>
        <div class="result">
            <table class="categories_result">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th class="steamLVL">SteamLvL</th>
                        <th class="achievment">Achievement</th>
                    </tr>
                </thead>
                 <tbody>
                    <tr v-for="(category, index) in categories" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td><img :src="category.avatar" alt="Avatar"></td>
                        <td>{{ category.username }}</td>
                        <td>{{ category.steamLevel }}</td>
                        <td>{{ category.achievement }}</td>
                    </tr>
                </tbody> 
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
.outer_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15rem;

    width: 90rem;
    height: 30rem;
    margin-top: 10rem;
    background-color: var(--dark);

    .search {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        align-items: center;

        label {
            color: var(--light);
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        input {
            width: 15rem;
            border: none;
            padding: 0.5rem;
            color: var(--light);
            background-color: var(--box2);

            &::placeholder {
                color: var(--placeholder);
            }

            &:focus {
                outline: none;
            }
        }
    }

    .filters {

        .filter {
            margin-top: 1rem;
            padding: 0.5rem;
            background-color: var(--box2);
            color: var(--placeholder);
            border: none;
            width: 75rem;


            &:focus {
                outline: none;
            }
        }
    }

    .result {
        margin-top: 2rem;
        width: 75rem;
        height: 20rem;
        overflow-y: auto;

        .categories_result {
            width: 100%;
            border-collapse: collapse;

            th {
                color: var(--light);
                font-size: 1rem;
                padding: 0rem;
                text-align: left;
                font-weight: 400;
                background-color: var(--box2);
                padding: 0.5rem;
            }

            td {
                background-color: var(--box2);
                opacity: 0.5;
                color: var(--light);
                font-size: 0.75rem;
                padding: 0.5rem;

            }
        }
    }
}
</style>