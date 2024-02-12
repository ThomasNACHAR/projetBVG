<script>
export default {
    methods: {
        switchPage(page) {
            this.$emit('toggle-page', page);
        } 
    }
}
</script>

<template>
<header class="header sticky top-0">
        <img alt="" class="w-12 h-12" src="@/assets/img/logononame.svg">
        <nav class="flex items-center justify-between">
            <RouterLink to="/" class="nav-button">ACCUEIL</RouterLink>
            <button class="nav-button" @click="switchPage('messages')">MESSAGES</button>
            <button class="nav-button" @click="switchPage('blog')">BLOG</button>
            <button class="nav-button" @click="switchPage('tours')">TOURS</button>
        </nav>
    </header>
</template>

<style>
</style>