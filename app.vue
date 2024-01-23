<script setup lang="ts">

</script>
<template>
    <NuxtLayout>
        <Nav />
       		<NuxtPage></NuxtPage>
        <Footer />
    </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --darkest:#162946;
    --dark:#284368;
    --light:#fff;
    --black: #000;
}


* {
    margin: 0;
    padding: 0;  
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--darkest);
}
</style>
