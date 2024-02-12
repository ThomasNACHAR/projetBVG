<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"

export default {
    components: {
        HeaderAdmin,
    },
    data() {
        return {

        url: 'http://localhost:3000',

        // Connexion à la page administrateur
        admin: {
            login: '',
            password: '',
        },
        isError: false,
        isLogged: false,

        // Changement de page
        pageToggled: 'admin',

        // Récupération des messages
        messagesList: [],
        selectedMessage: [],

        // Création des recettes
        mode: "creator",
        recette: {
          titre: '',
          contenu: '',
          ingredients: [],
          titleImage: '',
          auteur: '',
          date: '',
          tags: [],
        },
        ingredient: '',
        tag: '',
        selectedImage: null,
        imageExist: false,
        isImage: true,
        fieldMissing: false,
        isUploaded: false,
        emptyFields: []
        }

    },
  methods: {

    // Récupération des messages
    getMessages() {
        fetch(this.url+'/admin/contact')
        .then(response => {
            if (!response.ok) {
            throw new Error('Réponse non OK');
            }
            return response.json()
        })
        .then(data => {
            this.messagesList = data;
        })
        .catch(error => {
        console.error('Erreur :', error);
      });
    },

    // Connexion à la page administrateur
    connectAdmin() {
        const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.admin)
      };
      const res = fetch(this.url+'/admin/connect', fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de récupération des données !');
        }
        return response.text();
      })
      .then(admin => {
        console.log("Réponse :", admin);
        this.isError=false;
        this.isLogged=true;
        this.getMessages();
    })
      .catch(error => {
        console.error('Erreur de fetch :', error);
        this.isError=true;
      });
    },

    // Création des recettes
    createRecipe() {
      this.fieldMissing=false;
      this.isUploaded = false;
      this.isImage = true;
      this.emptyFields = [];
      if (this.recette.titre=='') this.emptyFields.push('titre');
      if (this.recette.contenu=='') this.emptyFields.push('contenu');
      if (this.selectedImage==null) this.emptyFields.push('titleImage');
      if (this.recette.auteur=='') this.emptyFields.push('auteur');
      if (this.recette.ingredients.length==0) this.emptyFields.push('ingredients');
      if (this.recette.tags.length==0) this.emptyFields.push('tags');
      console.log(this.emptyFields)
      if (this.emptyFields.length==0) this.verifyExtension()
      else this.fieldMissing=true;
    },
    verifyExtension() {
      this.recette.titleImage = this.selectedImage.name;
      let extensions = ['.jpg', '.jpeg', '.png', '.svg'];
      let point = this.selectedImage.name.lastIndexOf('.');
      let extension = this.selectedImage.name.substring(point);
      extension = extension.toLowerCase();
      console.log(extension)
      if (extensions.includes(extension)) this.sendImage();
      else this.isImage = false;
    },
    sendImage() {
      this.imageExist=false;
      const formData = new FormData();
      formData.append('file', this.selectedImage);
      fetch(this.url+'/admin/image', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
      })
      .then(data => {
            console.log(data);
            this.sendRecipe();     
        })
      .catch(error => {
        console.error('Erreur :', error);
        if (error.message.includes('400')) this.imageExist=true;
      });
    },
    sendRecipe() {
      const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.recette  )
          };
          console.log(this.recette);
          fetch(this.url+'/admin/recette', fetchOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erreur de récupération des données');
            }
          })
          .then(data => {
            console.log(data);
            this.isUploaded = true;
          })
          .catch(error => {
            console.error('Erreur :', error);
            if (error.message.includes('500')) this.fieldMissing=true;
          });
    },
    addTag() {
      this.recette.tags.push(this.tag)
      this.tag = ''
    },
    removeTag(index) {
      this.recette.tags.splice(index, 1)
    },
    addIngredient() {
      this.recette.ingredients.push(this.ingredient)
      this.ingredient = ''
    },
    removeIngredient(index) {
      this.recette.ingredients.splice(index, 1)
    },
    handleImage(event) {
      this.selectedImage = event.target.files[0];
    },
    validateExtension(name) {

    },

    // Changement de page
    togglePage(page) {
      this.pageToggled = page
    },
  }
}
</script>


<template>
    <HeaderAdmin @toggle-page="togglePage" v-if="isLogged"></HeaderAdmin>
    <div v-if="!isLogged" class="flex items-center justify-center h-screen flex-col">
        <form @submit.prevent="connectAdmin" class="flex flex-col gap-8 justify-center items-center h-screen bg-pink-500 rounded-[100px] p-8 m-4 h-1/2 w-1/2">
          <label for="login">Identifiant:</label>
          <input class="border p-2 rounded" type="text" id="login" v-model="admin.login" required>
          <label for="password">Mot de passe:</label>
          <input class="border p-2 rounded" type="password" id="password" v-model="admin.password" required>
          <button class="nav-button" type="submit">Envoyer</button>
        </form>
        <div v-if="isError" class="m-4 bg-red-300 flex justify-center items-center">Erreur d'authentification, vérifiez si les champs saisis sont corrects !</div>
    </div>

    <!-- MESSAGES -->

    <div v-if="isLogged&&pageToggled==='messages'" class="flex items-center justify-center h-screen flex-col">
        <div class="flex flex-col gap-8 justify-center items-center h-screen bg-pink-500 rounded-[100px] p-8 m-4 h-1/2 w-60 2xs:w-96 xs:w-1/2 mt-20">
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

    <!-- BLOG -->
    
    <div v-if="isLogged&&pageToggled==='blog'" class="m-4">
      <div class="title flex flex-col xl:flex-row gap-8 mt-20">
        <h2 class="text-6xl font-bold">Bienvenue sur le blog des recettes !</h2>
        <button @click="this.mode='reader'" v-if="mode=='creator'" class="home-button">Passer en mode lecture</button>
        <button @click="this.mode='creator'" v-if="mode=='reader'" class="home-button">Passer en mode création</button>
      </div>
      
      <div class="board">
        <div class="creator mt-8" v-if="mode=='creator'">
        <!-- Créateur de recettes -->
          <h3 class="text-4xl font-bold">Écrire un article</h3>
          <form @submit.prevent="createRecipe" class="flex flex-col space-y-4" novalidate>
            <label for="titre" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('titre')}">Titre:</label>
            <input class="border p-2 rounded" type="text" id="titre" v-model="recette.titre" required>

            <div class="flex flex-col space-x-4">
                <label for="file" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('titleImage')}">Fichier: (.jpg .jpeg .png .svg)</label>
                <input type="file" name="file" ref="imgInput" @change="handleImage" class="mt-2">
                <div v-if="!isImage" class="m-4 bg-red-300 flex justify-center items-center">Extension d'image invalide !</div>
                <div v-if="imageExist" class="m-4 bg-red-300 flex justify-center items-center">L'image existe déjà : veuillez renommer votre image.</div>
            </div>

            <label for="auteur" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('auteur')}">Auteur:</label>
            <input class="border p-2 rounded" type="text" id="auteur" v-model="recette.auteur" required>

            <label for="tag" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('tags')}">Tags:</label>
            <div class="flex space-x-2">
                <input class="border p-2 rounded" type="text" id="tag" v-model="tag" required>
                <button type="button" @click="addTag()" class="bg-pink-500 px-4 py-2 rounded">Ajouter</button>
            </div>
            <h4 class="text-lg font-semibold">Tags :</h4>
            <ul class="list-disc pl-4">
                <li v-for="(tag, iTag) in recette.tags" :key="iTag" class="flex items-center">
                    {{ tag }}
                    <button type="button" @click="removeTag(iTag)" class="ml-2 text-red-500">X</button>
                </li>
            </ul>

            <label for="ingredient" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('ingredients')}">Ingrédients:</label>
            <div class="flex space-x-2">
                <input class="border p-2 rounded" type="text" id="ingredient" v-model="ingredient" required>
                <button type="button" @click="addIngredient()" class="bg-pink-500 px-4 py-2 rounded">Ajouter</button>
            </div>
            <h4 class="text-lg font-semibold">Ingrédients :</h4>
            <ul class="list-disc pl-4">
                <li v-for="(ingredient, iIngredient) in recette.ingredients" :key="iIngredient" class="flex items-center">
                    {{ ingredient }}
                    <button type="button" @click="removeIngredient(iIngredient)" class="ml-2 text-red-500">X</button>
                </li>
            </ul>

            <label for="contenu" class="text-lg font-semibold" :class="{ 'text-red-500' : emptyFields.includes('contenu')}">Contenu:</label>
            <textarea class="border p-2 rounded" id="contenu" v-model="recette.contenu" cols="30" rows="10"></textarea>

            <button class="home-button" type="submit">Envoyer</button>
            <div v-if="fieldMissing" class="m-4 bg-red-300 flex justify-center items-center">Veuillez remplir tous les champs.</div>
            <div v-if="isUploaded" class="success m-4 bg-green-300 flex justify-center items-center">Recette créée avec succès !</div>
          </form>

        </div>
      </div>
    </div>

  </template>
  

  
  <style>
  </style>
  