<script>
export default {
    methods: {
        scrollTop() {
      document.documentElement.scrollTop = 0
    },
        switchPage(page) {
            this.scrollTop();
            this.$emit('toggle-page', page);
        } 
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<template>
    <header class="header sticky top-0">
        <img alt="" class="w-12 h-12" src="@/assets/img/logononame.svg">
        <nav class="flex items-center justify-between">
            <button class="nav-button" @click="switchPage('home')">ACCUEIL</button>
            <button class="nav-button" @click="switchPage('circuit')">CIRCUIT</button>
            <button class="nav-button" @click="switchPage('partenaires')">PARTENAIRES</button>
            <button class="nav-button" @click="switchPage('reservation')">RÉSERVATION</button>
            <button class="nav-button" @click="switchPage('recettes')">RECETTES</button>
            <button class="nav-button" @click="switchPage('contact')">CONTACT</button>

        </nav>

    </header>
</template>

<style>
.header {
    @apply bg-pink-500 p-4 h-16 flex items-center justify-between fixed top-0 left-0 w-full z-20;
}
.nav-button {
    @apply mr-4 bg-transparent border border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out;
}
</style>