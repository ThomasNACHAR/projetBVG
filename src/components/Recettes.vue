<script>
import { get } from 'mongoose';

export default {
    data() {
        return {
            url: "http://localhost:3000",
            recettesList: [],
            imagePath: "../../Recettes/"
        }
    },
  methods: {
    scroll() {
      const section = document.getElementById('startRecettes');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    getRecettes() {
        fetch(this.url+"/api/recettes")
        .then(response => {
            if (!response.ok) throw new Error('Erreur de récupération des données !');
            return response.json();         
        })
        .then(data => {
            this.recettesList = data;
            console.log(this.recettesList);
        })
        .catch(error => {
        console.error('Erreur :', error);
        });
    },
  },
  mounted() {
    this.getRecettes();
  }
}
</script>

<template>
    <div class="banner relative flex items-center justify-center">
        <img src="@/assets/img/trinquer.jpeg" alt="" class="w-full object-cover">
        <div class="banner-content absolute flex flex-col items-center justify-center">
            <h2 class="text-pink-500 mb-32 font-bold text-6xl">Recettes</h2>
            <button @click="scroll" class="home-button">Découvrir</button>
        </div>     
    </div>
    <div id="startRecettes" class="flex flex-col gap-12 justify-center items-center mt-24 mb-24 m-4">
        <h2 class="text-6xl font-bold">Bienvenue sur le blog des recettes !</h2>
    </div>
    <div class="flex flex-col justify-center items-center m-4">
        <button @click="getRecettes" class="home-button w-full">Actualiser les recettes</button>
        <div v-for="(recette, iRecette) in recettesList" :key="iRecette">
            
            <figure class="bg-pink-500 rounded-[100px] p-8 m-4">
                <img class="w-256 h-256 rounded-[100px] mx-auto" :src="imagePath+recette.titleImage" :alt="'Image de : '+recette.titre">
                <div class="pt-6 space-y-4">
                    <blockquote>
                    <p class="text-center text-3xl font-bold">
                        {{ recette.titre }}
                    </p>
                    </blockquote>
                    <figcaption>
                        <RouterLink class="bg-white rounded-full p-2 flex items-center justify-center" :to="{ name: 'recette', params: { path: recette.path } }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
</svg>

                        </RouterLink>
                    </figcaption>
                </div>
            </figure>
        </div>
        
    </div>
</template>

<style>
</style>