<script>
export default {
  methods: {
    scroll() {
      const section = document.getElementById('startCircuit');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
}
</script>

<template>
    <div class="banner relative flex items-center justify-center">
        <img src="@/assets/img/trinquer.jpeg" alt="" class="w-full object-cover">
        <div class="banner-content absolute flex flex-col items-center justify-center">
            <h2 class="text-pink-500 mb-32 font-bold text-6xl">Circuit</h2>
            <button @click="scroll" class="home-button">Découvrir</button>
        </div>     
    </div>
    <div id="startCircuit" class="flex flex-col gap-12 justify-center items-center mt-24 mb-24 m-4">
        <p>Autour des meilleurs produits locaux et grâce à notre passion commune pour les bonnes choses, découvrez la plus savoureuse des balades gourmandes…</p>

        <p>Nous explorerons à pied le charme du quartier emblématique de notre vieux Bourges, les vitrines gastronomiques et viticoles de la ville.</p>

        <p>Cette charmante ville et sa gastronomie sont riches d’histoire, laissez-nous vous guider. En petit groupe, nous découvrirons le Bourges, ses berruyers et quelques-uns des passionnés qui nourrissent…cet Art de vivre à la Française.</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-12 mb-24">
        <h3 class="section-title">Petits rappels</h3>
        <div class="flex flex-col gap-8 2xl:flex-row m-4 2xl:gap-24">
            <div class="flex flex-col  gap-8">
                <img class="w-24 h-24" src="@/assets/img/horloge.png" alt="">
                <h4 class="font-bold">Horaire</h4>
                <p>Mercredi et samedi</p>
                <p>1 ère balade de 9h à 12h</p>
                <p>2 ème balade de 13h à 16h</p>
            </div>
            <div class="flex flex-col  gap-8">
                <img class="w-24 h-24" src="@/assets/img/groupe.png" alt="">
                <h4 class="font-bold">Groupe</h4>
                <p>Jusqu’a 10 personnes avec votre guide.</p>
            </div>
            <div class="flex flex-col  gap-8">
                <img class="w-24 h-24" src="@/assets/img/distance.png" alt="">
                <h4 class="font-bold">Distance</h4>
                <p>Sur environ 3 km découvrez des artisans passionnés.</p>
                <p>L’histoire de produits et de lieux emblématiques pour les berruyers !</p>
                <p>2 ème balade de 13h à 16h</p>
            </div>
            <div class="flex flex-col  gap-8">
                <img class="w-24 h-24" src="@/assets/img/partenaires.png" alt="">
                <h4 class="font-bold">Partenaires</h4>
                <p>Une douzaine de produits différents dégustés.</p>
                <p>6 partenaires typiques de Bourges.</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-12 mb-24">
        <h4 class="section-title">Aperçu de la balade gourmande</h4>
        <img src="@/assets/img/carteVille.png" alt="">
    </div>
</template>

<style>
</style>