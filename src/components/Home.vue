<script>
export default {
  methods: {
    scroll() {
      const section = document.getElementById('figures');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
}
</script>

<template>
    <div class="banner">
        <img src="@/assets/img/home-banner.jpeg" alt="" class="w-full object-cover">
        <figure class="hidden xs:block bg-pink-500 rounded-[100px] p-8 m-4 absolute">
                <div class="pt-6 space-y-4">
                    <blockquote>
                      <h1 class="flex flex-col">
  <span class="text-center text-6xl font-bold">BerryVery</span>
  <span class="text-center text-6xl font-bold">Gourmande</span>
                      </h1>
                    </blockquote>
                    <figcaption class="flex items-center flex-col justify-center">
                      <h2 class=" mb-4 ml:mb-32 w-full text-center">La balade gourmande du Berry !</h2>
                      <button @click="scroll" class="home-button">Découvrir</button>
                    </figcaption>
                </div>
            </figure>      
    </div>
    <div class="small-banner">
      <figure class="block xs:hidden bg-pink-500 rounded-[100px] p-8 m-4">
                <div class="pt-6 space-y-4">
                    <blockquote>
                      <h1 class="flex flex-col">
  <span class="text-center text-4xl font-bold">BerryVery</span>
  <span class="text-center text-4xl font-bold">Gourmande</span>
                      </h1>
                    </blockquote>
                    <figcaption class="flex items-center flex-col justify-center">
                      <h2 class=" mb-4 ml:mb-32 w-full text-center">La balade gourmande du Berry !</h2>
                      <button @click="scroll" class="home-button">Découvrir</button>
                    </figcaption>
                </div>
            </figure>   
    </div>
    <div id="figures" class="figures flex flex-col gap-8 ml:gap-0 ml:flex-row justify-center z-2 mt-[50px] lg:mt-[-75px] lg:absolute z-10">
        <figure class="bg-pink-500 rounded-xl p-8 lg:w-1/4 m-4">
  <img class="w-24 h-24 rounded-full mx-auto mt-[-4.6rem]" src="@/assets/img/home-round1.png" alt="" width="384" height="512">
  <div class="pt-6 space-y-4">
    <blockquote>
        <p class="text-center text-3xl font-bold">
        Des Petits Groupes
      </p>
    </blockquote>
    <figcaption>
      <p class="text-center">
        Vivez cette expérience gourmande en toute convivialité et sympathie avec les personnes de votre choix (10 personnes par groupe).
      </p>
    </figcaption>
  </div>
</figure>
<figure class="bg-pink-500 rounded-xl p-8 lg:w-1/4 m-4">
  <img class="w-24 h-24 rounded-full mx-auto mt-[-4.6rem]" src="@/assets/img/home-round2.png" alt="" width="384" height="512">
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-center text-3xl font-bold">
        Des Belles Balades
      </p>
    </blockquote>
    <figcaption>
      <p class="text-center">
        Un Food Tour proposé dans le coeur historique de Bourges, pour une découverture unique et gustative de la ville.
      </p>
    </figcaption>
  </div>
</figure>
<figure class="bg-pink-500 rounded-xl p-8 lg:w-1/4 m-4">
  <img class="w-24 h-24 rounded-full mx-auto mt-[-4.6rem]" src="@/assets/img/home-round3.png" alt="" width="384" height="512">
  <div class="pt-6 space-y-4">
    <blockquote>
    <p class="text-center text-3xl font-bold">
        Nos Partenaires Au Grand Coeur
      </p>
    </blockquote>
    <figcaption>
      <p class="text-center">
        Notre meilleure sélection d’artisans de Bourges pour un moment des plus uniques.
      </p>
    </figcaption>
  </div>
</figure>
    </div>
    <div class="lg:mt-[30rem] lg:mb-[30rem] mt-[5rem] flex flex-col ml:flex-row items-center justify-center">
        <div class="flex flex-col w-80">
            <h2 class="paragraph-title">Food tour et son concept</h2>
            <p class="w-80 mb-4">Lors d’une balade historique dans la ville de Bourges,
                découvrez de multiples spécialités typiques du Berry.
                Durant 3h, vous aurez l’occasion d’allier littérature
                et gastronomie en vous rendant chez certains artisans de Bourges.
                La convivialité et la sympathie sera au rendez-vous pour accompagner 
                ce moment unique et insolite !</p>
            <button class="home-button">Réservez !</button>
        </div>
        <img src='@/assets/img/specialites.jpeg' alt="" class="ml:ml-4 mt-8 ml:mt-0 rounded-full">
    </div>
    <div class="mt-16">
        <img src='@/assets/img/cathedrale.jpeg' alt="" class="w-full h-[48rem]">
        <div class="flex justify-center items-center">
            <figure class="bg-pink-500 rounded-[100px] p-8 m-4 absolute mt-[100px]">
                <img class="w-256 h-256 rounded-[100px] mx-auto" src="@/assets/img/creatrice-bvg.jpg" alt="">
                <div class="pt-6 space-y-4">
                    <blockquote>
                    <p class="text-center text-3xl font-bold">
                        Sabrina Pinthon
                    </p>
                    </blockquote>
                    <figcaption>
                    <p class="text-center m-4">
                        Créatrice de BerryVery Gourmande, 43 ans, libraire depuis 17 ans.
                    </p>
                    <p class="text-center m-4">
                        J’aime la littérature, la gastronomie, et découvrir les différentes spécialités culinaires des différentes régions.
                    </p>
                    <p class="text-center m-4">
                        Vous pouvez me retrouver sur mes réseaux sociaux ainsi que me contacter via mon mail ou numéro de téléphone.
                    </p>
                    <button class="home-button w-full">Contactez-moi !</button>
                    </figcaption>
                </div>
            </figure>
        </div>
    </div>
    <div class="mt-[32rem] flex flex-col justify-center items-center lg:mb-8 mb-16">
        <h2 class="section-title m-4">Ce qui vous attend !</h2>
        <div class="flex justify-center items-center">
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-16 mr-8 ml-8">
                <img src="@/assets/img/food1.png" alt="Image 1" class="img-foodtour">
                <img src="@/assets/img/food2.png" alt="Image 2" class="img-foodtour">
                <img src="@/assets/img/food3.png" alt="Image 3" class="img-foodtour">
                <img src="@/assets/img/food4.png" alt="Image 4" class="img-foodtour">
                <img src="@/assets/img/food5.png" alt="Image 5" class="img-foodtour">
                <img src="@/assets/img/food6.png" alt="Image 6" class="img-foodtour">
            </div>
        </div>
    </div>
    
    
    
</template>

<style>

.banner {
  @apply relative flex items-center justify-center;
}

.home-button {
    @apply mr-4 bg-pink-500 border text-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out;
}

.img-foodtour {
    @apply w-96 h-64 object-cover rounded-[100px];
}

.section-title {
    @apply mb-8 text-center text-5xl font-bold text-pink-500;
}

.paragraph-title {
    @apply text-3xl font-bold text-pink-500 mb-4;
}
</style>