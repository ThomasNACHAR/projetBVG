<script>
export default {
  methods: {
    scroll() {
      const section = document.getElementById('contactForm');
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
                <h2 class="text-pink-500 mb-32 font-bold text-6xl">Contact</h2>
                <button @click="scroll" class="home-button">Commencer</button>
            </div>
    </div>
    <div id="contactForm" class="flex flex-col gap-8 justify-center items-center mt-12 mb-12">
        <div class="flex flex-col items-center justify-center">
            <label for="lastName">Nom:</label>
            <input
      type="text"
      id="lastName"
      v-model="lastNameValue"
      class="border p-2 rounded"
      placeholder="Nom"
      required
    />
        </div>
        <div class="flex flex-col items-center justify-center">
            <label for="firstName">Prénom:</label>
            <input
      type="text"
      id="firstName"
      v-model="firstNameValue"
      class="border p-2 rounded"
      placeholder="Prénom"
      required
    />
        </div>
        <div class="flex flex-col items-center justify-center">
            <label for="emailAddress">Adresse e-mail:</label>
            <input
      type="email"
      id="emailAddress"
      v-model="emailAddressValue"
      class="border p-2 rounded"
      placeholder="Adresse e-mail"
      required
    />
        </div>
        <div class="flex flex-col items-center justify-center">
            <label for="message">Message:</label>
            <textarea
      id="message"
      v-model="messageValue"
      class="border p-2 rounded w-96 h-96"
      placeholder="Votre message..."
      required
    ></textarea>
        </div>
        <button class="home-button">Envoyer</button>
        
    
    
    
        
    </div>
</template>

<style>
</style>