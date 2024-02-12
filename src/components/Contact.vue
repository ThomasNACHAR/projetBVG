<script>
export default {
  methods: {
    scroll() {
      const section = document.getElementById('contactForm');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    envoiMessage() {
      this.isSent = true;
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      };
      fetch(this.url+'/api/contact', fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de récupération des données !');
        }
        return response.json();
      })
      .then(data=> {
        console.log("Réponse :", data);
        console.log("Message :", data.message);
        this.isError=false;
      })
      .catch(error => {
        console.error('Erreur de fetch :', error);
        this.isError=true;
      });
      this.data = {
        nom: '',
        email: '',
        message: ''
      }
    }
  },
  data() {
    return {
      url: 'http://localhost:3000',
      data: {
        nom: '',
        email: '',
        message: ''
      },
      isError: false,
      isSent: false
    }
  }
}
</script>

<template>
    <div class="banner relative flex items-center justify-center">
            <img src="@/assets/img/trinquer.jpeg" alt="" class="w-full object-cover">
            <div class="banner-content absolute flex flex-col items-center justify-center">
                <h2 class="text-pink-500 mb-32 font-bold text-6xl">Contact</h2>
                <button @click="scroll" class="home-button">Commencer</button>
            </div>
    </div>
    <form @submit.prevent="envoiMessage" class="flex flex-col gap-8 justify-center items-center mt-12 mb-12" id="contactForm">
      <label for="nom">Nom:</label>
      <input class="border p-2 rounded" type="text" id="nom" v-model="data.nom" required>

      <label for="email">Email:</label>
      <input class="border p-2 rounded" type="email" id="email" v-model="data.email" required>

      <label for="message">Message:</label>
      <textarea class="border p-2 rounded w-96 h-96" id="message" v-model="data.message" required></textarea>

      <button class="home-button" type="submit">Envoyer</button>
    </form>
    <div v-if="isSent&&!isError" class="success m-4 bg-green-300 flex justify-center items-center">Message envoyé avec succès !</div>
    <div v-if="isSent&&isError" class="error m-4 bg-red-300 flex justify-center items-center">Erreur d'envoi, veuillez réessayer plus tard</div>
</template>

<style>
</style>