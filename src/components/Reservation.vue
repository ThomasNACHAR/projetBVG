<script>
export default {
  methods: {
    scroll() {
      const section = document.getElementById('startReservation');
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
            <h2 class="text-pink-500 mb-32 font-bold text-6xl">Réservation</h2>
            <button @click="scroll" class="home-button">Découvrir</button>
        </div>
    </div>
    <div id="startReservation" class="flex flex-col justify-center items-center gap-12 m-4 mt-24 mb-24">
        <p>Partez à la découverte de la ville de Bourges par le voyage culinaire. Nos partenaires sont situés dans les quartiers principaux et centraux de notre ville.</p>
        <p>Découvrez, entre autres, les secrets de Bourges mais surtout ses pépites gastronomiques à ne pas louper ! Une visite palpitante qui ravira vos papilles !</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-12 mb-24">
        <h3 class="section-title">Nos tarifs</h3>
        <div class="flex flex-col ms:flex-row w-full justify-center items-center">
            <figure class="bg-pink-500 rounded-[100px] p-8 m-4 ms:w-1/3">
                <div class="pt-6 space-y-4 flex flex-col justify-center items-center">
                    <blockquote>
                    <p class="text-center text-3xl font-bold">
                        Tarif individuel
                    </p>
                    </blockquote>
                    <figcaption>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                                Balade de 3h
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                       
                        Visite de 6 partenaires 
                    </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                        Tarif normal
                    </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                      
                        1 balade
                    </p>
                        </div>
                    </figcaption>
                    <h2 class="font-bold text-6xl">35€</h2>
                    <p>La balade</p>
                    <button class="home-button w-full mt-8">Réserver</button>
                </div>
            </figure>
            <figure class="bg-pink-500 rounded-[100px] p-8 m-4 ms:w-1/3">
                <div class="pt-6 space-y-4 flex flex-col justify-center items-center">
                    <blockquote>
                    <p class="text-center text-3xl font-bold">
                        Tarif enfant
                    </p>
                    </blockquote>
                    <figcaption>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                                Balade de 3h
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                       
                        Visite de 6 partenaires 
                    </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                                Tarif réduit
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                      
                        1 balade
                    </p>
                        </div>
                    </figcaption>
                    <h2 class="font-bold text-6xl">10€</h2>
                    <p>La balade</p>
                    <button class="home-button w-full mt-8">Réserver</button>
                </div>
            </figure>
            <figure class="bg-pink-500 rounded-[100px] p-8 m-4 ms:w-1/3">
                <div class="pt-6 space-y-4 flex flex-col justify-center items-center">
                    <blockquote>
                    <p class="text-center text-3xl font-bold">
                        Tarif – de 25 ans
                    </p>
                    </blockquote>
                    <figcaption>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                                Balade de 3h
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                       
                        Visite de 6 partenaires 
                    </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">
                        Tarif réduit
                    </p>
                        </div>
                        <div class="flex gap-4">
                            <svg class="mt-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <p class="text-center m-4">                      
                        1 balade
                    </p>
                        </div>
                    </figcaption>
                    <h2 class="font-bold text-6xl">30€</h2>
                    <p>La balade</p>
                    <button class="home-button w-full mt-8">Réserver</button>
                </div>
            </figure>     
        </div>
    </div>
    <div class="flex flex-col justify-center items-center">
        <h2 class="section-title">Planifiez !</h2>
        <h3 class="font-bold">Durée de la balade</h3>
        <p>3 heures</p>
        <p>Ébauche calendrier</p>
    </div>
    <div class="flex flex-col justify-center items-center">
        <h2 class="section-title mt-8">Offrir</h2>
        <h3 class="m-4 font-bold">Si vous voulez offrir cette succulente balade, obtenez la carte cadeau à imprimer</h3>
        <img src="@/assets/img/carte-cadeau.png" alt="">
        <button class="home-button mt-8 mb-8">Offrez-moi</button>
    </div>
</template>

<style>
</style>