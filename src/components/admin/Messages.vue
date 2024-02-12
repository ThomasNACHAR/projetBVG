<script>
export default {
    data() {
        return {
            messagesList: [],
            selectedMessage: [],
        }
    },
  methods: {
    getMessages() {
        fetch('http://localhost:3000/admin/contact')
        .then(response => {
            if (!response.ok) {
            throw new Error('Réponse non OK');
            }
            return response.json()
        })
        .then(data => {
            this.messagesList = data;
            console.log(this.messagesList);
        })
        .catch(error => {
        console.error('Erreur :', error);
      });
    },
    exportGetMessages() {
        this.$emit("getMessages");
    }
  }
}
</script>

<template>
    <div class="flex items-center justify-center h-screen flex-col">
        <div class="flex flex-col gap-8 justify-center items-center h-screen bg-pink-500 rounded-[100px] p-8 m-4 h-1/2 w-1/2 mt-20">
            <h2 class="ms:text-6xl font-bold">Messages</h2>
            <select name="messages" v-model="selectedMessage">
                <option v-for="message in messagesList" :key="message._id" :value="message">Auteur : {{ message.nom }}</option>
            </select>
            <ul class="flex flex-col gap-8">
                <li class="flex justify-center items-center flex-col gap-8">
                  <span class="flex justify-center items-center ms:bg-white w-96 h-16 text-3xl font-bold">Nom :</span> {{ selectedMessage.nom }}
                </li>
                <li class="flex justify-center items-center flex-col gap-8">
                  <span class="flex justify-center items-center ms:bg-white w-96 h-16 text-3xl font-bold">E-mail :</span> {{ selectedMessage.email }}
                </li>
                <li class="flex justify-center items-center flex-col gap-8">
                  <span class="flex justify-center items-center ms:bg-white w-96 h-16 text-3xl font-bold">Message :</span> {{ selectedMessage.message }}
                </li>
            </ul>
        </div>
    </div>  
</template>

<style>
</style>