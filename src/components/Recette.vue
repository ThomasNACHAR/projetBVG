<script>
export default {
    props: ['path'],
    data() {
        return {
            url: "http://localhost:3000",
            recette: null,
            imagePath: "../../Recettes/",
        }
    },
    mounted() {
        console.log(this.path)
        this.getRecette();
        
    },
    methods: {
        getRecette() {
            console.log(this.path);
            const fetchOptions = {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: this.path
            }
            fetch(this.url+'/api/recette', fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de récupération des données !")
                }
                console.log(response)
                return response.json()
            })
            .then(data => {
                this.recette = data;
                console.log(this.recette)
            })
            .catch(error => {
                console.error(error);
            })
        }
    }
}
</script>

<template>
    <div class="container" v-if="recette">
        <div class="banner w-screen bg-pink-500 flex items-center justify-center lg:mt-20">
            <img :src="imagePath+recette.titleImage" alt="" class="h-[600px] object-cover">  
        </div>
        <h2 class="flex justify-center items-center font-bold text-6xl mt-10 lg:ml-60">{{ recette.titre }}</h2>
        <div class="w-screen bg-pink-500 mt-10 p-4">
            <h3 class="banner font-bold">Ingrédients :</h3>
            <ul class="m-4">
                <li v-for="(ingredient, iIngredient) in recette.ingredients" :key="iIngredient">- {{ ingredient }}</li>
            </ul>
        </div>
        <div class="w-screen bg-pink-500 mt-10 p-4 mb-20">
            <h3 class="banner font-bold">Recette :</h3>
            <p class="m-4">{{ recette.contenu }}</p>
        </div>
    </div>
    
</template>

<style>
</style>