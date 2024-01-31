<script>

import Slider from '@/components/Slider.vue'
export default {
  methods: {
    scroll() {
      const section = document.getElementById('startPartenaires');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  components: {
    Slider
  }
}
</script>

<template>
    <div class="banner relative flex items-center justify-center">
        <img src="@/assets/img/trinquer.jpeg" alt="" class="w-full object-cover">
        <div class="banner-content absolute flex flex-col items-center justify-center">
            <h2 class="text-pink-500 mb-32 font-bold text-6xl">Partenaires</h2>
            <button @click="scroll" class="home-button">Découvrir</button>
        </div>     
    </div>
    <div id="startPartenaires" class="flex flex-col justify-center items-center gap-12 m-4 mt-24 mb-24">
        <h3 class="section-title">Découvrez nos partenaires</h3>
        <p>Les meilleurs artisans, commerçants et chefs ont en commun l’amour du produit,
        un savoir-faire et des connaissances spécifiques propres à leur domaine de prédilection.
        Essayez de mieux comprendre ce qui se passe en amont. </p>
        <p>Nous souhaitons, à travers eux, valoriser le patrimoine gastronomique de notre région
        ainsi qu’inciter à consommer des produits plutôt artisanaux, locaux, savoureux, sains et
        respectueux de l’environnement.</p>
    </div>
    <div class="flex flex-col justify-center items-center m-4 gap-12 mb-24">
        <h3 class="section-title">Nos 6 partenaires berruyers</h3>
        <p>Pour que vous puissiez découvrir un autre visage du Berry,
        nous avons déniché les meilleurs producteurs et artisans locaux.
        Croquez dans le pâté berrichon fondant et croustillant, savourez
        les arômes de la Villa Monin ou d’un vin Sancerrois. BerryVery Gourmande va vous surprendre !</p>
        <div class="flex justify-center items-center">
            <div class="grid lg:grid-cols-3 gap-16 ml-8">
                <img src="@/assets/img/partenaire1.png" alt="Image 1" class="img-foodtour">
                <img src="@/assets/img/partenaire2.jpeg" alt="Image 2" class="img-foodtour">
                <img src="@/assets/img/partenaire3.jpeg" alt="Image 3" class="img-foodtour">
                <img src="@/assets/img/partenaire4.jpeg" alt="Image 4" class="img-foodtour">
                <img src="@/assets/img/partenaire5.jpeg" alt="Image 5" class="img-foodtour">
                <img src="@/assets/img/partenaire6.jpeg" alt="Image 6" class="img-foodtour">
            </div>
        </div>
    </div>
    <Slider></Slider>
</template>

<style>
</style>