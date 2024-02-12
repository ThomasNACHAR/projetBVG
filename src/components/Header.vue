<script>
export default {
    methods: {
        scrollTop() {
      document.documentElement.scrollTop = 0
    },
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
            <RouterLink to="/" class="nav-button">ACCUEIL</RouterLink>
            <RouterLink to="/circuit" class="nav-button">CIRCUIT</RouterLink>
            <RouterLink to="/partenaires" class="nav-button">PARTENAIRES</RouterLink>
            <RouterLink to="/reservation" class="nav-button">RÉSERVATION</RouterLink>
            <RouterLink to="/recettes" class="nav-button">RECETTES</RouterLink>
            <RouterLink to="/contact" class="nav-button">CONTACT</RouterLink>
        </nav>

    </header>
</template>

<style>
.header {
    @apply bg-pink-500 p-4 h-16 flex items-center justify-between fixed top-0 left-0 w-full z-20;
}
.nav-button {
    @apply mr-4 bg-transparent border border-black text-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out;
}
</style>