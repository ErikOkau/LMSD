<script setup lang="ts">
</script>

<template>
    <div class="terms-of-use">
        <h1>Terms of Use</h1>
        <p>Welcome to my website! By signing in, you agree to the following terms:</p>
        <ul>
            <li>You are responsible for keeping your Steam account secure and confidential. I'm not liable for any unauthorized access or use of your account by third parties.</li>
            <li>You agree to comply with the Steam Subscriber Agreement and the Steam Online Conduct Rules when using my website and services. You also agree not to violate any applicable laws or regulations in your jurisdiction.</li>
            <li>You acknowledge that I'm not affiliated with, endorsed by, or sponsored by Steam or Valve Corporation. I don't claim any ownership or rights over the Steam trademarks, logos, or content displayed on my website.</li>
            <li>You grant me a non-exclusive, royalty-free, worldwide, perpetual, irrevocable, and sublicensable license to use, reproduce, modify, distribute, and display your Steam information, including achievements and user ID, on my website and services for the purposes of providing and improving my services, as well as for research and analysis.</li>
            <li>You can delete your account and data from my website at any time by contacting me at erikmsorheim@yahoo.no. However, some of your data may remain on my servers or backups for a reasonable period of time after deletion, or as required by law or contract.</li>
            <li>I reserve the right to modify, suspend, or terminate my website and services at any time, with or without notice, for any reason. I'm not liable for any loss or damage that may result from such actions.</li>
            <li>I may update or change my terms of service from time to time, and I will notify you of any material changes by posting them on my website or by email. Your continued use of my website and services after such changes constitutes your acceptance of the new terms of service.</li>
        </ul>
        <p>By signing in, you grant me permission to access your Steam information, including achievements and user ID.</p>
        <p>I'm storing your user ID to enable other users to search for you on our platform.</p>
        <p class="questions">If you have any <a>questions</a> regarding the terms of use please contact me at <a href = "mailto: erikmsorheim@yahoo.no">erikmsorheim@yahoo.no</a></p>
    </div>
</template>

<style scoped lang="scss">
.terms-of-use {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    color: white;
    background-color: var(--dark);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

    h1 {
        color: var(--light);
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;

        a {
            color: black;
            font-size: 1.1rem;
        }
    }

    ul {
        margin-bottom: 1rem;
        padding-left: 2rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .questions {
        margin-top: 2rem;
        color: white;
        
    }
}
</style>